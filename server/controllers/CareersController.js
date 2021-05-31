const { sendEmail } = require('../services/EmailsService')
const { sendApplication } = require('../services/HuntflowService')
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
  const parsedReqest = parseRequest(req)

  const { isValid, error } = validate(parsedReqest)
  if (!isValid) return res.status(error.status).json(error)

  const huntflowRes = await sendApplication(buildRequest('huntflow'))
  const emailRes = await sendEmail(buildRequest('email'), data => res.json(data))
  return res.json({
    huntflowRes,
    emailRes,
  })
}

module.exports = {
  index,
}
