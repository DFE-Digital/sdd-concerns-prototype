// =============================================================================
// Settings - things that can be changed from /admin
// =============================================================================
const settings = {}
const records = require('./records.json')
const trusts = require('./transfers/trusts.json')

module.exports = {
  records,
  settings,
  trusts
}
