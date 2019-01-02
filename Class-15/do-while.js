var i = 0

const rains = () => Math.random() < 0.25

do {
  i++
} while (!rains());
var frequency
if( i === 1 ){
  frequency = 'time'
}
else {
  frequency = 'times'
}
console.log(`I went to see if it was ${i} ${frequency}`);
