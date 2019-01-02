var alejandro = {
  name: 'Alejandro',
  surName: 'Ortegano',
  age: '23',
  weight: 70
}

console.log(`at the beginning of the year ${alejandro.name} weight ${alejandro.weight} kg`)

const WEIGHT = 0.3
const DAYS_OF_THE_YEAR = 365
var days = 0

const gainWeight = people => people.weight += WEIGHT
const slimDown = people => people.weight -= WEIGHT
const eatLot = () => Math.random() < 0.3
const sport = () => Math.random() < 0.4

const META = alejandro.weight - 3

while (alejandro.weight > META) {
  if (eatLot()) {
    gainWeight(alejandro)
  }
  if (sport()) {
    slimDown(alejandro)
  }
  days++
}

console.log(`${days} days passed until ${alejandro.name} lost 3kg`);
