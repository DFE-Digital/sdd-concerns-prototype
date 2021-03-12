const express = require('express')
const router = express.Router()

require('./routes/transfers/dashboard-routes')(router)

module.exports = router
