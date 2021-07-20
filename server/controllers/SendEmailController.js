const { sendEmail } = require('../services/EmailsService')
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

export async function send(req, res) {
  const parsedReq = parseRequest(req)
  const emailReq = buildRequest(parsedReq, 'email')

  const emailValidation = validate(emailReq, 'email')
  if (!emailValidation.isValid) return res.status(emailValidation.error.status).json(emailValidation.error)

  const emailRes = await sendEmail(emailReq, data => res.json({ email: data }))

  return emailRes
}
