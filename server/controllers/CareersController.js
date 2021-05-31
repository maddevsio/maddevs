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
  const parsedReqest = parseRequest(req)
  const huntflowRequest = buildRequest(parsedReqest, 'huntflow')
  const emailRequest = buildRequest(parsedReqest, 'email')

  const huntflowRes = await sendApplication(huntflowRequest)
  const emailRes = await sendEmail(emailRequest, data => res.json(data))

  return res.json({
    huntflowRes,
    emailRes,
  })
}

module.exports = {
  index,
}
