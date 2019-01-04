const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


const opts = { crossDomain: true }

const onPeopleResponse =  function(people) {
  console.log(`hello, i am ${people.name}`);
}


function character(id){
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, onPeopleResponse)
}

character(1)
character(10)
