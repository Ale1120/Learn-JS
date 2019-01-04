const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


const opts = { crossDomain: true }

function character(id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
  $.get(url, opts, function(people) {
    console.log(`hello, i am ${people.name}`);

    if(callback) {
      callback()
    }
  })
}

character(1, function (){
  character(2, function () {
    character(3, function () {
      character(4, function () {
        character(5, function () {
          character(6, function () {
            character(7, function () {
              character(8, function () {
                character(9, function () {
                  character(10, function () {
                    character(11)
                  })
                })
              })
            })
          })
        })
      })
    })
  })
})
