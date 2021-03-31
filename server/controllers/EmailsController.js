// service
const { sendEmail } = require('../services/EmailsService')

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

function index(req, res) {
  const { isValid, error } = validate(req)
  if (!isValid) return res.status(error.status).json(error)
  return sendEmail(req, data => {
    res.json(data)
  })
}

module.exports = {
  index,
}
