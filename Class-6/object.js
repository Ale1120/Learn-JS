// object
// key: value

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

function PrintNameCl({ name }) {
  console.log(name.toUpperCase());
}

PrintNameCl(alejandro)
PrintNameCl(anthony)
PrintNameCl({ name: 'Javier' })
