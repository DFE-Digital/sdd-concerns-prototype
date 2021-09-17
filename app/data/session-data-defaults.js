// =============================================================================
// Settings - things that can be changed from /admin
// =============================================================================
const settings = {}
const records = require('./records.json')
const trusts = require('./concerns/trusts.json')

nextSteps_example = `12/09/21 - Make contact with the trust for assurances and to solidify a date for submission
15/09/21 - Assess the financial statements once submitted and preform a financial statement assessment.`
deEscalation_example = `Case can be closed when financial statements have been submitted and the trust has provided adequate assurances as to why this has happened. They will also have to have robust plans and procedures in place to make sure this does not occur again for the next submission of the accounts.`
caseAim_example = `Ensure documents are submitted and assurances can be given by the trust as to why. Make sure no further late return of documents occur and there are no other concerns at the trust.`
currentStatus_example = `Have contacted the Trust asking for a date of submission for the 2019/20 accounts. No assurances have been given and the trust is proving difficult to make contact with.

Have called the school and spoke to finance department. I was told that the head teacher will contact me back with regards to submission of the accounts and as to why the financial statement has not been submitted.`
issue_example = `Late return of Financial Statement 2019/20. The trust has not provided an updated version of the accounts and have yet to provide any assurance on a time when this will be submitted.`

module.exports = {
  records,
  settings,
  trusts,
  nextSteps_example,
  deEscalation_example,
  caseAim_example,
  currentStatus_example,
  issue_example
}

