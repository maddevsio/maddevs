const sendpulse = require('sendpulse-api')
const config = require('../config')

function buildEmail({
  body: { variables, templateId, attachment },
}) {
  const email = {
    subject: variables.subject,
    template: {
      id: templateId, // required
      variables,
    },
    from: {
      name: variables.modalTitle,
      email: 'marketing@maddevs.io',
    },
    to: [
      {
        name: 'Mad Devs team',
        email: variables.emailTo,
      },
    ],
  }

  if (attachment) email.attachments_binary = { [attachment.name]: attachment.base64 }
  return email
}

function sendEmail(req, callback = () => {}) {
  sendpulse.init(
    config.SENDPULSE_API_USER_ID,
    config.SENDPULSE_API_KEY,
    config.SENDPULSE_TOKEN_STORAGE,

    () => {
      const email = buildEmail(req)
      sendpulse.smtpSendMail(callback, email)
    },
  )
}

module.exports = {
  sendEmail,
}
