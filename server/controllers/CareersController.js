// const { sendEmail } = require('../services/EmailsService')
const { sendApplication } = require('../services/HuntflowService')
// const { validate } = require('../utils/validation')

async function index(req, res) {
  // const { isValid, error } = validate(req)
  // if (!isValid) return res.status(error.status).json(error)

  const huntflowRes = await sendApplication(req)
  return res.json(huntflowRes)
  // return sendEmail(req, data => res.json(data))
}

module.exports = {
  index,
}
