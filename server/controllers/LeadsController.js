const { sendEmail } = require('../services/EmailsService')
const { createLead } = require('../services/LeadsService')
const { validate } = require('../utils/validation')

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
