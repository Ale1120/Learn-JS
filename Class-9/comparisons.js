var x = 4, y = '4'

x == y

x === y

var alejandro = {
  name: alejandro
}

var people = {
  name: alejandro
}

alejandro == people
alejandro === people

// var otherPeople = alejandro
// alejandro == otherPeople
// alejandro === otherPeople

var otherPeople = {
  ...alejandro
}

alejandro == otherPeople
alejandro === otherPeople
