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

// Branching
router.post('/concerns/create-case-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  const concern = req.session.data['concern-type']

  if (concern === 'finance') {
    res.redirect('/concerns/finance/create-case-2')
  }
  if (concern === 'governance') {
    res.redirect('/concerns/governance/create-case-2')
  } else {
    res.redirect('/concerns/irregularity/create-case-2')
  }
})


module.exports = router
