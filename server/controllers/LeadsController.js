const { sendEmail } = require('../services/EmailsService')
const { createLead } = require('../services/LeadsService')

function validate(req) {
  const error = {
    status: 200,
    message: 'OK',
  }

  const errors = {
    templateId: {
      message: 'templateId key not found or incorrect',
      compareFn: value => !value || typeof value !== 'number',
    },
    variables: {
      message: 'variables key not found',
      compareFn: value => !value,
    },
  }

  Object.entries(errors).some(([key, { message, compareFn }]) => {
    const isError = compareFn(req.body[key])

    if (isError) {
      error.status = 500
      error.message = message
    }

    return isError
  })

  return {
    isValid: error.status === 200,
    error,
  }
}

async function create(req, res) {
  const { isValid, error } = validate(req)
  if (!isValid) return res.status(error.status).json(error)

  sendEmail(req)
  const response = await createLead(req)

  return res.json(response)
}

module.exports = {
  create,
}
