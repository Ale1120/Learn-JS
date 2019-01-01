var age = 23
console.log(age)
age ++
console.log(age);

var weight = 70
weight -= 2
console.log(weight);

var sandwich = 1
weight += sandwich
console.log(weight)

var soccer = 3
weight -= soccer
console.log(weight);

var wine = 200.3
var total = Math.round(wine * 100 * 3) / 100
console.log(total);

// number of decimales string
var totalStr = total.toFixed(2)
console.log(totalStr);

// string a decimal
var totalNumber = parseFloat(totalStr)
console.log(totalNumber);

var pizza = 8
var people = 2
var piece = pizza / people
console.log(piece);
