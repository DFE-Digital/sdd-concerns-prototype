const express = require('express')
const router = express.Router()

require('./routes/transfers/dashboard-routes')(router)

router.get('/transfers/outgoing-trust-search', (req, res) => {
  if (req.query['outgoing-trust-id']) {
    req.session.data['outgoing-trust-id'] = req.query['outgoing-trust-id']
    req.session.data['autocompleted-outgoing-trust-id'] = true
    res.redirect('/transfers/trust-details')
  } else {
    res.render('transfers/outgoing-trust-search')
  }
})

router.get('/transfers/incoming-trust-search', (req, res) => {
  if (req.query['incoming-trust-id']) {
    req.session.data['incoming-trust-id'] = req.query['incoming-trust-id']
    req.session.data['autocompleted-incoming-trust-id'] = true
    res.redirect('/transfers/summary')
  } else {
    res.render('transfers/incoming-trust-search')
  }
})

module.exports = router
