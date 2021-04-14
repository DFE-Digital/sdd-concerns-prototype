const express = require('express')
const router = express.Router()

require('./routes/concerns/dashboard-routes')(router)

router.get('/concerns/outgoing-trust-search', (req, res) => {
  if (req.query['outgoing-trust-id']) {
    req.session.data['outgoing-trust-id'] = req.query['outgoing-trust-id']
    req.session.data['autocompleted-outgoing-trust-id'] = true
    res.redirect('/concerns/trust-details')
  } else {
    res.render('concerns/outgoing-trust-search')
  }
})

router.get('/concerns/incoming-trust-search', (req, res) => {
  if (req.query['incoming-trust-id']) {
    req.session.data['incoming-trust-id'] = req.query['incoming-trust-id']
    req.session.data['autocompleted-incoming-trust-id'] = true
    res.redirect('/concerns/summary')
  } else {
    res.render('concerns/incoming-trust-search')
  }
})

module.exports = router
