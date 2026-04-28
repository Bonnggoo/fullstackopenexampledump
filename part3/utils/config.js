require('dotenv').config()
const config = require('./utils/config')
const logger = require('./utils/logger')

const PORT = process.env.PORT
const MONGODB_URI = process.env.MONGODB_URI

logger.info(`Server running on port ${config.PORT}`)

module.exports = { MONGODB_URI, PORT }