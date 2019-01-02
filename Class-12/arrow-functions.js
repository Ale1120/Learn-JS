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

const isAdult = ({ age }) => age >= ADULT

function printAdult (people){
  if(isAdult(people)){
    console.log(`${people.name} is adult`);
  }
  else{
    console.log(`${people.name} no is adult`);
  }
}

const access = ({ age }) => {
  if (!isAdult({ age })){
    console.log('access denied')
  }
}
access(alejandro)
access(jose)
access(javier)
