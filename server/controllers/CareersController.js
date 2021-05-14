const { sendEmail } = require('../services/EmailsService')
const { validate } = require('../utils/validation')

function index(req, res) {
  const { isValid, error } = validate(req)
  if (!isValid) return res.status(error.status).json(error)
  sendEmail(req, data => res.json(data))
  return null
}

module.exports = {
  index,
}
