let countries               = require('./countries')
let ethnicities             = require('./ethnicities')
let nationalities           = require('./nationalities')
let statuses                = require('./status')

// Different training routes
let trainingRouteData          = require('./training-route-data')
let trainingRoutes = trainingRouteData.trainingRoutes

let currentYear             = 2020

// =============================================================================
// Settings - things that can be changed from /admin
// =============================================================================

let settings = {}

// Currently enabled routes
settings.enabledTrainingRoutes = Object.values(trainingRoutes).filter(route => route.defaultEnabled == true).map(route => route.name).sort()

// One of `blended-model` or `hat-model`
settings.providerModel = "blended-model"

// The providers the signed-in user belongs to
settings.userProviders = [
  "Coventry University",
  "University of Buckingham"
]

// The ‘active’ provider for the current user if using hat model
// Must be one of the ones in settings.userProviders
settings.userActiveProvider = "Coventry University"

// Enable timeline on records
settings.includeTimeline = 'true'

// Enable timeline on records
settings.includeGuidance = false

// Enable timeline on records
settings.includeDeclaration = false

// Enable timeline on records
settings.showBulkLinks = false

// Start date is required when registering trainees
settings.requireTraineeStartDate = 'true'

// Default number of Publish courses that the provider offers
settings.courseLimit = 20

// Supliment records with getter for name
let records = require('./records.json')
records = records.map(record => {
  if (record.personalDetails){
    Object.defineProperty(record.personalDetails, 'fullName', {
      get() {
        let names = []
        names.push(this.givenName)
        names.push(this.middleNames)
        names.push(this.familyName)
        return names.filter(Boolean).join(' ')
      },
      enumerable: true
    })
    Object.defineProperty(record.personalDetails, 'shortName', {
      get() {
        let names = []
        names.push(this.givenName)
        names.push(this.familyName)
        return names.filter(Boolean).join(' ')
      },
      enumerable: true
    })
  }
  
  return record
})

module.exports = {
  countries,
  currentYear,
  ethnicities,
  nationalities,
  records,
  settings,
  statuses,
  trainingRoutes,
}
