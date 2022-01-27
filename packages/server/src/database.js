'use strict'

const mongoose = require('mongoose')

const config = require('./config')

function connect(callback) {
  const mongoURI = `mongodb://${config.MONGODB_USERNAME}:${config.MONGODB_PASSWORD}@${config.MONGODB_SERVER}`

  console.log(`Connecting to the database ${mongoURI}`)

  mongoose.connect(mongoURI, callback)
}

module.exports = {
  connect
}