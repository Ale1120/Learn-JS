var alejandro = {
  name: 'Alejandro',
  surName: 'Ortegano',
  age: '23',
}

var jose = {
  name: 'jose',
  surName: 'bonilla',
  age: '17',
}

var javier = {
  name: 'javier',
  surName: 'torrealba',
  age: '18',
}

const ADULT = 18

function isAdult(people) {
  return people.age >= ADULT
}

function printAdult (people){
  if(isAdult(people)){
    console.log(`${people.name} is adult`);
  }
  else{
    console.log(`${people.name} no is adult`);
  }
}

printAdult(alejandro)
printAdult(jose)
printAdult(javier)
