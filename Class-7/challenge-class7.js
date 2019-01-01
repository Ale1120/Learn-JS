var alejandro = {
  name: 'Alejandro',
  surName: 'Ortegano',
  age: '23'
}

var anthony = {
  name : 'Anthony',
  surName: 'Sanoja',
  age: 23
}

function PrintNameAndAge(people) {
  var { name } = people
  var { age } = people
  console.log(`hello, my names is ${name} and  i am ${age} years old`);
}

PrintNameAndAge(alejandro)
PrintNameAndAge(anthony)
