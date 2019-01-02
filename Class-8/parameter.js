var alejandro = {
  name: 'Alejandro',
  surName: 'Ortegano',
  age: 23
}

var anthony = {
  name : 'Anthony',
  surName: 'Sanoja',
  age: 23
}

function happyBirthday (people){
  return {
    ...people,
    age: people.age + 1
  }
}

happyBirthday(alejandro)
