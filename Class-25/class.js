
class People {

  constructor(name, surName, height) {
    this.name = name
    this.surName = surName
    this.height = height
  }

  greet() {
    console.log(`hello, my name is ${this.name} ${this.surName} `)
  }
  isTall(){
    return this.height >= 1.80
  }
}

class Developer extends People {

  constructor(name, surName, height){
    super(name, surName, height)
  }

  greet () {
    console.log(`hello, my name is ${this.name} ${this.surName} i am a Developer`)

  }
}

// create new object, prototype
var alejandro = new People('Alejandro', 'Ortegano', 1.70)
var anthony = new Developer('Anthony', 'Sanoja', 1.75)
var javier = new People('Javier','Torrealba', 1.80 )

alejandro.greet()
anthony.greet()
anthony.isTall()
