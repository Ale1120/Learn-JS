// prototype === Class

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

// create new object, prototype
var alejandro = new People('Alejandro', 'Ortegano', 1.70)
var anthony = new People('Anthony', 'Sanoja', 1.75)
var javier = new People('Javier','Torrealba', 1.80 )

alejandro.isTall()
anthony.isTall()
javier.isTall()
