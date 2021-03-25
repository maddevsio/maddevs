const mongoose = require('mongoose')

const tokenSchema = new mongoose.Schema({
  type: String,
  refresh: String,
  access: String,
})

const Token = mongoose.model('Token', tokenSchema)

module.exports = Token
