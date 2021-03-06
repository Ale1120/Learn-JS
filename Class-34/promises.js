const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


const opts = { crossDomain: true }

function character(id){
  return new Promise((resolve, reject )=> {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, opts, function (data) {
      resolve(data)
    })
    .fail( () => reject(id))
  })
}

const onError = id => console.log(`There was an error. the character was not found ${id}`);


var ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
var promises = ids.map( id => character(id))
Promise.all(promises)
  .then( characters => console.log(characters))
  .catch(onError)

promises
