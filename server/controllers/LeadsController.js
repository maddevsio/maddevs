const { sendEmail } = require('../services/EmailsService')
const { createLead } = require('../services/LeadsService')
const { getIPInfo } = require('../services/IPService')
const { validate } = require('../utils/validation')

async function create(req, res) {
  const { isValid, error } = validate(req, 'email')
  if (!isValid) return res.status(error.status).json(error)

  const ipInfo = await getIPInfo()
  req.body.variables.ipInfo = ipInfo

  sendEmail(req)
  const response = await createLead(req)

  return res.json(response)
}

module.exports = {
  create,
}
