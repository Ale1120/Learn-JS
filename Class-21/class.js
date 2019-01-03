// prototype === Class

function People (name, surName) {
  this.name = name
  this.surName = surName
}

People.prototype.greet = function () {
  console.log(`hello, my name is ${this.name} ${this.surName} `)

}

// create new object, prototype
var alejandro = new People('Alejandro', 'Ortegano')
var anthony = new People('Anthony', 'Sanoja')
var javier = new People('Javier','Torrealba' )

alejandro.greet()
