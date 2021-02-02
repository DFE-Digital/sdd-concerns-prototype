const faker             = require('faker')

module.exports = (status) => {
  const events = { items: [] }

  const date = faker.helpers.randomize([
    '2019-08-12',
    '2019-08-11',
    faker.date.past(),
    faker.date.past(),
    faker.date.past(),
    faker.date.past(),
    faker.date.past()
  ])

  const addEvent = (content) => {
    events.items.push({
      title: content,
      user: 'Provider',
      date: date
    })
  }

  addEvent("Record created")

  // events.items.push({
  //   title: 'Note added',
  //   user: faker.name.findName(),
  //   date: date,
  //   meta: {
  //     noteIndex: 0
  //   }
  // })




if (status == 'Pending TRN'){
  addEvent("Trainee submitted for TRN")
}

if (status == 'TRN received'){
  addEvent("Trainee submitted for TRN")
  addEvent("TRN received")
}

if (status == 'QTS recommended'){
  addEvent("Trainee submitted for TRN")
  addEvent("TRN received")
  addEvent("Trainee recommended for QTS")
}

if (status == 'QTS awarded'){
  addEvent("Trainee submitted for TRN")
  addEvent("TRN received")
  addEvent("Trainee recommended for QTS")
  addEvent("QTS awarded")
}

if (status == 'Deferred'){
  addEvent("Trainee submitted for TRN")
  addEvent("TRN received")
  addEvent("Trainee deferred")
}

if (status == 'Withdrawn'){
  addEvent("Trainee submitted for TRN")
  addEvent("TRN received")
  addEvent("Trainee withdrawn")
}


  return events
}
