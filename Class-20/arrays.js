var alejandro = {
  name: 'Alejandro',
  surName: 'Ortegano',
  age: 23,
  height: 1.70,
  book: 10
}

var anthony = {
  name : 'Anthony',
  surName: 'Sanoja',
  age: 23,
  height: 1.75,
  book: 40
}

var richi = {
  name : 'Richeidy',
  surName: 'Salcedo',
  age: 21,
  height: 1.73,
  book: 7
}

var javier = {
  name : 'Javier',
  surName: 'Torrealba',
  age: 28,
  height: 1.78,
  book: 2
}

var piter = {
  name : 'Pedro',
  surName: 'Alvarado',
  age: 40,
  height: 1.85,
  book: 80
}

var people = [alejandro, anthony, richi, javier, piter]

//var bookTotal = 0
// var people = [alejandro, anthony, richi, javier, piter]
// for (var i = 0; i < people.length; i++) {
//  bookTotal = bookTotal + people[i].book
//}


const reducer = (bookTl, people) => bookTl + people.book

var bookTotal = people.reduce(reducer, 0)


console.log(`the total of books are ${bookTotal} `);
