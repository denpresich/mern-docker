'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const database = require('./database')
const routers = require('./routes')

const config = require('./config')

const app = express()

app.use(bodyParser.json())

app.use(routers)

database.connect(err => {
  if (err) {
    console.error(err)
    process.exit(1)
  }

  console.log('Database connected')

  app.listen(config.PORT, '0.0.0.0', () => {
    console.log(`Application is listening at 0.0.0.0:${config.PORT} in ${config.ENV}`)
  })
})