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
const younger = ({ age }) => !isAdult({ age })

const access = ({ age }) => {
  if (!younger({ age })){
    console.log('access denied')
  }
  else{
    console.log('access allowed');
  }
}

access(alejandro)
access(javier)
access(jose)
