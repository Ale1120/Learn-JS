
class People {

  constructor(name, surName, height) {
    this.name = name
    this.surName = surName
    this.height = height
  }

  greet(answer) {
    var { name, surName } = this
    console.log(`hello, my name is ${name} ${surName} `)
    if (answer) {
      answer(name, surName, false)
    }
  }
  isTall(){
    return this.height > 1.80
  }
}

class Developer extends People {

  constructor(name, surName, height){
    super(name, surName, height)
  }

  greet (answer) {
    // var name = this.name
    // var surName = this.surName
    var { name, surName } = this
    console.log(`hello, my name is ${name} ${surName} i am a Developer`)
    if (answer) {
      answer(name, surName, true)
    }
  }
}

function answer (name, surName, isDev) {
  console.log(`Good Morning ${name} ${surName}`);
  if (isDev) {
      console.log(`ohhh you are a developer `);
  }
}




// create new object, prototype
var alejandro = new People('Alejandro', 'Ortegano', 1.70)
var anthony = new Developer('Anthony', 'Sanoja', 1.75)
var javier = new People('Javier','Torrealba', 1.81 )

alejandro.greet()
anthony.greet(answer)
javier.greet(answer)
