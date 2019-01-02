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

function adult (people){
  if(people.age >= 18){
    console.log(`${people.name} is adult`);
  }
  else{
    console.log(`${people.name} no is adult`);
  }
}

adult(alejandro)
adult(jose)
adult(javier)
