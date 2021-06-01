const axios = require('axios')
const fs = require('fs')
const FormData = require('form-data')
const {
  HUNTFLOW_API_URL, HUNTFLOW_TOKEN, HUNTFLOW_ACCOUNT_ID, HUNTFLOW_RESERVE_VACANCY_ID,
} = require('../config')

const apiUrlPrefix = `${HUNTFLOW_API_URL}/account/${HUNTFLOW_ACCOUNT_ID}`

const defaultConfig = {
  headers: {
    Authorization: `Bearer ${HUNTFLOW_TOKEN}`,
    'Content-Type': 'application/json',
  },
}

const uploadFile = async cvFilePath => {
  const formData = new FormData()
  formData.append('file', fs.createReadStream(cvFilePath))

  const uploadResponse = await axios.post(`${apiUrlPrefix}/upload`, formData, {
    headers: {
      Authorization: `Bearer ${HUNTFLOW_TOKEN}`,
      'Content-Type': 'multipart/form-data',
      ...formData.getHeaders(),
    },
  })
  return uploadResponse.data
}

const buildCandidate = (cvFileId, {
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

const buildApplication = (vacancyId, cvFileId) => ({
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
    const cvFile = uploadFile(req.file.path)

    // Applicant creation
    const candidate = buildCandidate(cvFile.id, req.body)
    const candidateResponse = await axios.post(`${apiUrlPrefix}/applicants`, candidate, defaultConfig)

    // Checking a vacancyId for existence
    try {
      await axios.get(`${apiUrlPrefix}/vacancies/${vacancyId}`, defaultConfig)
    } catch {
      vacancyId = HUNTFLOW_RESERVE_VACANCY_ID
    }

    // Creating a vacancy application
    const application = buildApplication(vacancyId, cvFile.id)
    const applicationResponse = await axios.post(`${apiUrlPrefix}/applicants/${candidateResponse.data.id}/vacancy`,
      application,
      defaultConfig)

    return applicationResponse.data
  } catch (error) {
    return error
  }
}

module.exports = {
  sendApplication,
}
