// -------------------------------------------------------------------
// Imports and setup
// -------------------------------------------------------------------

// Leave this filters line
var filters = {}

/*
  ====================================================================
  filterName
  --------------------------------------------------------------------
  Short description for the filter
  ====================================================================

  Usage:

  [Usage here]

  filters.sayHi = (name) => {
    return 'Hi ' + name + '!'
  }

*/

filters.trustsBySearchString = (trusts) =>
  trusts.map(trust => `${trust.trust_name}, ${trust.trust_reference_number}, ${trust.companies_house_number}`)

filters.filterTrustsBySearchString = (trusts, searchString) => {
  searchString = searchString.toLowerCase()
  return trusts.filter(trust => {
    return trust.trust_name.toLowerCase().includes(searchString) ||
      trust.trust_reference_number.toLowerCase().includes(searchString) ||
      trust.companies_house_number.toLowerCase().includes(searchString)
  })
}

filters.trustsForAutocomplete = (trusts) => {
  return trusts.map(
    trust => ({
      id: trust.id,
      searchString: `${trust.trust_name}, ${trust.trust_reference_number}, ${trust.companies_house_number}`
    })
  )
}

filters.getTrustById = (trusts, id) => {
  return trusts.find(trust => trust.id === id)
}

filters.getAcademiesByIds = (trust, ids) => {
  return trust.academies.filter(academy => ids.includes(academy.id))
}

filters.trustAddressToHtml = (address) => {
  return address.replace('\n', '<br />')
}

filters.trustAcademiesToCheckboxes = (trust) => {
  return trust.academies.map(academy => ({ value: academy.id, text: academy.academy_name }))
}

// -------------------------------------------------------------------
// keep the following line to return your filters to the app
// -------------------------------------------------------------------
exports.filters = filters
