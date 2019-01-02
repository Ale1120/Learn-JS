var alejandro = {
  name: 'Alejandro',
  surName: 'Ortegano',
  age: '23',
  weight: 70
}

console.log(`at the beginning of the year ${alejandro.name} weight ${alejandro.weight} kg`)

const WEIGHT = 0.2
const DAYS_OF_THE_YEAR = 365

const gainWeight = people => people.weight += WEIGHT
const slimDown = people => people.weight -= WEIGHT

for (var i = 1; i <= DAYS_OF_THE_YEAR; i++) {
  var random = Math.random()

  if (random < 0.25){
    gainWeight(alejandro)
  }
  else if (random < 0.5) {
    slimDown(alejandro)
  }

}

console.log(`at the end of the year ${alejandro.name} weight ${alejandro.weight.toFixed(1)} kg`);
