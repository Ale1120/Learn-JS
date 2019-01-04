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

character(1)
  .then(function (people){
  console.log(`The character 1 is ${people.name}`);
})
  .catch(onError)
