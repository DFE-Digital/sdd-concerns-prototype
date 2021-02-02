const faker = require('faker')

module.exports = status => {

  let trn

  if (!status.includes('Draft') && !status.includes('Pending TRN')){
    trn = faker.random.number({
      'min': 1000000,
      'max': 9999999
    })
  }

  return trn
}
