const { sendEmail } = require('../services/EmailsService')
const { sendApplication } = require('../services/HuntflowService')

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

  const huntflowRes = await sendApplication(huntflowReq)
  await sendEmail(emailReq, data => res.json({ email: data, huntflow: huntflowRes }))
}

module.exports = {
  index,
}
