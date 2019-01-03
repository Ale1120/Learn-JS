// prototype === Class

function People (name, surName, height) {
  this.name = name
  this.surName = surName
  this.height = height
}

People.prototype.isTall = function () {
    if(this.height >= 1.80){
      console.log(`${this.name} ${this.surName} is Tall`)
    }
    else{
      console.log(`${this.name} ${this.surName} is Low`)
    }


}

// create new object, prototype
var alejandro = new People('Alejandro', 'Ortegano', 1.70)
var anthony = new People('Anthony', 'Sanoja', 1.75)
var javier = new People('Javier','Torrealba', 1.80 )

alejandro.isTall()
anthony.isTall()
javier.isTall()
