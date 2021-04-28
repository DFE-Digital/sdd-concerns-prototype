// =============================================================================
// Settings - things that can be changed from /admin
// =============================================================================
const settings = {}
const records = require('./records.json')
const trusts = require('./concerns/trusts.json')

module.exports = {
  records,
  settings,
  trusts
}
