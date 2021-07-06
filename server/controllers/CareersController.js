const { sendEmail } = require('../services/EmailsService')
const { sendApplication } = require('../services/HuntflowService')
const { getIPInfo } = require('../services/IPService')
const { validate } = require('../utils/validation')

const parseRequest = req => ({
  ...req,
  body: {
    ...JSON.parse(req.body.payload),
  },
})

const buildRequest = (req, key) => ({
  ...req,
  body: req.body[key],
})

async function index(req, res) {
  const parsedReq = parseRequest(req)
  const huntflowReq = buildRequest(parsedReq, 'huntflow')
  const emailReq = buildRequest(parsedReq, 'email')

  const huntflowValidation = validate(huntflowReq, 'huntflow')
  if (!huntflowValidation.isValid) return res.status(huntflowValidation.error.status).json(huntflowValidation.error)

  const emailValidation = validate(emailReq, 'email')
  if (!emailValidation.isValid) return res.status(emailValidation.error.status).json(emailValidation.error)

  const huntflowRes = await sendApplication(huntflowReq)

  const ipInfo = await getIPInfo()
  emailReq.ipInfo = ipInfo

  const emailRes = await sendEmail(emailReq, data => res.json({ email: data, huntflow: huntflowRes }))

  return emailRes
}

module.exports = {
  index,
}
