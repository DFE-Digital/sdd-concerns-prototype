// =============================================================================
// Settings - things that can be changed from /admin
// =============================================================================
const settings = {}
const records = require('./records.json')
const trusts = require('./concerns/trusts.json')

issue_example = `Late return of Financial Statement 2019/20. The trust has not provided an updated version of the accounts and have yet to provide any assurance on a time when this will be submitted.`
currentStatus_example = `ESFA have been in contact with the trust and the deficit position has been confirmed by the school. The trust has stated they may need an emergency advance of funding if this situation is not addressed.

ESFA has asked if they wish to have an SRMA visit to identify savings and have provided information on benchmarking.

We have a meeting with the trust on to get a better idea of the problem and work through next steps of action.`
caseAim_example = `To help the trust get back into a stable financial position either with financial assistance or SRMA measures. Trust to draw up a realistic recovery plan with the aid of the ESFA and SRMA.`
nextSteps_example = `08/12/21 - Meeting with the trust to get a better idea of the problem and work through next steps of action. Trust to provide monthly accounts.`
deEscalation_example = `Case can be de-escalated when the trust financial position recover.`
issue_exampleTwo = `Acer Trust have a predicted in year deficit of (£460k). Their predicted cumulative deficit position is (£825k) for 2020/21. The trust has deteriorating pupil numbers which is leading to increasing in year deficits over the next 3 years according to BFR data. The trust has just asked for £250k emergency advance of funding to keep them from becoming insolvent within the new year. 

Confirmed cumulative deficit 5% of year’s total income or greater in most recent audited accounts.

An agreed trust financial plan may be in place but it has not been adhered to for 3 months.`
currentStatus_exampleTwo = `ESFA have been in contact with the trust and the prediction of insolvency has been confirmed within their most recent submission of monthly accounts.

ESFA has conducted an SRMA visit to identify savings and the trust has implemented the suggestions. Despite this declining pupil numbers continues to cause financial problems.

We have a meeting with the trust next week to get a better idea of the problem and work through next steps of action with regards to a submission for funding.`
caseAim_exampleTwo = `To help the trust get back into a stable financial position with financial assistance.

RDD are scoping for transfer with a view to this happening within the new year.

Trust to work along side the incoming trust to provide their due diligence for transfer.`
deEscalation_exampleTwo = `Case can be de-escalated when the trust financial position recovers of the schools are transferred.`
nextSteps_exampleTwo = `07/12/21 - Meeting with the trust to get a better idea of the problem and work through next steps of action with regards to a submission for funding. Trust to provide monthly accounts.`

module.exports = {
  records,
  settings,
  trusts,
  nextSteps_example,
  deEscalation_example,
  caseAim_example,
  currentStatus_example,
  issue_example,
  nextSteps_exampleTwo,
  deEscalation_exampleTwo,
  caseAim_exampleTwo,
  currentStatus_exampleTwo,
  issue_exampleTwo
}

