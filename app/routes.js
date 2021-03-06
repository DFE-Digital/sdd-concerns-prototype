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


// Case Setup Routes //

// match the page here to form action //
router.post('/trust-details', function (req, res) {

  // Make a variable and give it the value of your radio group's 'name'
  var projectStatus = req.session.data['case-type']

  // Check whether the variable matches a condition - your radio values 
  if (projectStatus == "record"){
  res.redirect('concerns/trust-details-record')
  } else if (projectStatus == "concern"){
  res.redirect('concerns/trust-details-concern')
  } else if (projectStatus == "safeguarding"){
  res.redirect('concerns/trust-details-safeguarding')
  } else if (projectStatus == "srma"){
  res.redirect('concerns/trust-details-srma')
  }

  })

router.post('/trust-details-concern', function (req, res) {

  // Make a variable and give it the value of your radio group's 'name'
  var projectStatus = req.session.data['concernType']
  // Check whether the variable matches a condition - your radio values 
  if (projectStatus == "compliance"){
  res.redirect('concerns/compliance')
  }
  else if (projectStatus == "financial"){
  res.redirect('concerns/financial')
  }
  else if (projectStatus == "force-majeure"){
  res.redirect('concerns/force-majeure')
  }
  else if (projectStatus == "governance"){
  res.redirect('concerns/governance')
  }
  else if (projectStatus == "irregularity"){
  res.redirect('concerns/irregularity')
  }

  /*
  // Make a variable and give it the value of your radio group's 'name'
  var projectStatus = req.session.data['concernType-1']
  // Check whether the variable matches a condition - your radio values 
  if (projectStatus == "compliance-financial-reporting"){
  res.redirect('concerns/compliance-financial-reporting')
  } else if (projectStatus == "compliance-financial-returns"){
  res.redirect('concerns/compliance-financial-returns')
  }

  var projectStatus = req.session.data['concernType-2']
  // Check whether the variable matches a condition - your radio values
  if (projectStatus == "financial-deficit"){
  res.redirect('concerns/financial-deficit')
  } else if (projectStatus == "financial-projected-deficit"){
  res.redirect('concerns/financial-projected-deficit')
  } else if (projectStatus == "financial-cash-flow-shortfall"){
  res.redirect('concerns/financial-cash-flow-shortfall')
  } else if (projectStatus == "financial-clawback"){
  res.redirect('concerns/financial-clawback')
  }

  var projectStatus = req.session.data['concernType-4']
  // Check whether the variable matches a condition - your radio values
  if (projectStatus == "governance-governance"){
  res.redirect('concerns/governance-governance')
  } else if (projectStatus == "governance-closure"){
  res.redirect('concerns/governance-closure')
  } else if (projectStatus == "governance-executive-pay"){
  res.redirect('concerns/governance-executive-pay')
  } else if (projectStatus == "governance-safeguarding"){
  res.redirect('concerns/governance-safeguarding')
  }
*/

  })


module.exports = router
