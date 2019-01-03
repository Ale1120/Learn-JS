var alejandro = {
  name: 'Alejandro',
  surName: 'Ortegano',
  age: 23,
  height: 1.70
}

var anthony = {
  name : 'Anthony',
  surName: 'Sanoja',
  age: 23,
  height: 1.75
}

var richi = {
  name : 'Richeidy',
  surName: 'Salcedo',
  age: 21,
  height: 1.73
}

var javier = {
  name : 'Javier',
  surName: 'Torrealba',
  age: 28,
  height: 1.78
}

var piter = {
  name : 'Pedro',
  surName: 'Alvarado',
  age: 40,
  height: 1.85
}

var people = [alejandro, anthony, richi, javier, piter]

people[0]
people[0].height
people[0]['height']

for (var i = 0; i < people.length; i++) {
  console.log(`${people[i].name} measure ${people[i].height}mts`);
}
