//heritage

function  heritage(prototypeSon, prototypeFather){
  var fn = function () {}
  fn.prototype = prototypeFather.prototype
  prototypeSon.prototype = new fn
  prototypeSon.prototype.constructor = prototypeSon
}



function People (name, surName, height) {
  this.name = name
  this.surName = surName
  this.height = height
}

People.prototype.greet = function () {
  console.log(`hello, my name is ${this.name} ${this.surName} `)

}

People.prototype.isTall = function () {
  return this.height >= 1.80
}

function Developer (name, surName){
  this.name = name
  this.surName = surName
}

heritage(Developer, People)

Developer.prototype.greet = function () {
  console.log(`hello, my name is ${this.name} ${this.surName} i am a Developer`)

}


// create new object, prototype
var alejandro = new People('Alejandro', 'Ortegano', 1.70)
var anthony = new Developer('Anthony', 'Sanoja', 1.75)
var javier = new People('Javier','Torrealba', 1.80 )

alejandro.isTall()
anthony.isTall()
javier.isTall()
