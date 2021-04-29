const path = require('path')
const fs = require('fs')
const { google } = require('googleapis')

/**
 * Path to keys.json file
 */
const KEYS_FILEPATH = path.join(__dirname, 'keys.json')

/**
 * Function for build keys file for google auth
 */
async function buildKeysFile() {
  const fileData = `{
    "type": "${process.env.RADIATOR_AUTH_TYPE}",
    "project_id": "${process.env.RADIATOR_PROJECT_ID}",
    "private_key_id": "${process.env.RADIATOR_PRIVATE_KEY_ID}",
    "private_key": "${process.env.RADIATOR_PRIVATE_KEY}",
    "client_email": "${process.env.RADIATOR_CLIENT_EMAIL}",
    "client_id": "${process.env.RADIATOR_CLIENT_ID}",
    "auth_uri": "${process.env.RADIATOR_AUTH_URI}",
    "token_uri": "${process.env.RADIATOR_TOKEN_URI}",
    "auth_provider_x509_cert_url": "${process.env.RADIATOR_PROVIDER_CERT_URL}",
    "client_x509_cert_url": "${process.env.RADIATOR_CLIENT_CERT_URL}"
  }`

  await fs.writeFile(KEYS_FILEPATH, fileData, () => {})
}

/**
 * Function for unlink(delete) keys file
 */
async function unlinkKeysFile() {
  await fs.unlink(KEYS_FILEPATH, () => {})
}

/**
 * Function for authorize in google
 */
async function authorize() {
  await buildKeysFile()

  const auth = new google.auth.GoogleAuth({
    keyFilename: KEYS_FILEPATH,
    scopes: ['https://www.googleapis.com/auth/analytics'],
  })

  google.options({ auth })

  return () => unlinkKeysFile()
}

module.exports = authorize
