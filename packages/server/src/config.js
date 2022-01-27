'use strict'

const ENV = process.env.ENV || 'production'

const PORT = 5000

// Database
const MONGODB_USERNAME = process.env.MONGODB_USERNAME
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD
const MONGODB_SERVER = process.env.MONGODB_SERVER

module.exports = {
  ENV,
  PORT,
  MONGODB_USERNAME,
  MONGODB_PASSWORD,
  MONGODB_SERVER
}