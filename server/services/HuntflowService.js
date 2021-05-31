const axios = require('axios')
const fs = require('fs')
const FormData = require('form-data')
const {
  HUNTFLOW_API_URL, HUNTFLOW_TOKEN, HUNTFLOW_ACCOUNT_ID, HUNTFLOW_RESERVE_VACANCY_ID,
} = require('../config')

const defaultConfig = {
  headers: {
    Authorization: `Bearer ${HUNTFLOW_TOKEN}`,
    'Content-Type': 'application/json',
  },
}

const buildApplicant = (cvFileId, {
  firstName, middleName, lastName, email, linkedinProfile, positionTitle, positionValue,
}) => ({
  first_name: firstName,
  middle_name: middleName,
  last_name: lastName,
  position: `${positionTitle}. You can also consider me for your other: ${positionValue} roles.`,
  email,
  externals: [
    {
      data: {
        body: `To get more information on my skills, please check out my linkedin profile: ${linkedinProfile}`,
      },
      auth_type: 'NATIVE',
      files: [
        {
          id: cvFileId,
        },
      ],
    },
  ],
})

const buildVacancyApplication = (vacancyId, cvFileId) => ({
  vacancy: vacancyId,
  status: 75897, // "Новые"
  comment: 'Заявка на вакансию отправлена с сайта https://maddevs.io/',
  files: [
    {
      id: cvFileId,
    },
  ],
})

async function sendApplication(req) {
  try {
    let { vacancyId } = req.body

    // Uploading CV file to huntflow
    const formData = new FormData()
    formData.append('file', fs.createReadStream(req.file.path))
    const uploadResponse = await axios.post(`${HUNTFLOW_API_URL}/account/${HUNTFLOW_ACCOUNT_ID}/upload`, formData, {
      headers: {
        Authorization: `Bearer ${HUNTFLOW_TOKEN}`,
        'Content-Type': 'multipart/form-data',
        ...formData.getHeaders(),
      },
    })

    // Applicant creation
    const applicant = buildApplicant(uploadResponse.data.id, req.body)
    const applicantResponse = await axios.post(`${HUNTFLOW_API_URL}/account/${HUNTFLOW_ACCOUNT_ID}/applicants`, applicant, defaultConfig)

    // Checking a vacancyId for existence
    try {
      await axios.get(`${HUNTFLOW_API_URL}/account/${HUNTFLOW_ACCOUNT_ID}/vacancies/${vacancyId}`, defaultConfig)
    } catch {
      vacancyId = HUNTFLOW_RESERVE_VACANCY_ID
    }

    // Creating a vacancy application
    const vacancyApplication = buildVacancyApplication(vacancyId, uploadResponse.data.id)
    const applicationResponse = await axios.post(`${HUNTFLOW_API_URL}/account/${HUNTFLOW_ACCOUNT_ID}/applicants/${applicantResponse.data.id}/vacancy`,
      vacancyApplication,
      defaultConfig)

    return applicationResponse.data
  } catch (error) {
    return error.response.data
  }
}

module.exports = {
  sendApplication,
}
