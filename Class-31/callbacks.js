const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'


const opts = { crossDomain: true }

function character(id, callback){
  const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`

  $.get(url, opts, callback)
    .fail( () => {
      console.log(`There was an error. the character was not found ${id}`);
    })
}

character(1, function (people){
  console.log(`hello, i am ${people.name}`);

  character(2, function (people) {
    console.log(`hello, i am ${people.name}`);

    character(3, function (people) {
      console.log(`hello, i am ${people.name}`);

      character(4, function (people) {
        console.log(`hello, i am ${people.name}`);

        character(5, function (people) {
          console.log(`hello, i am ${people.name}`);

          character(6, function (people) {
            console.log(`hello, i am ${people.name}`);

            character(7, function (people) {
              console.log(`hello, i am ${people.name}`);

              character(8, function (people) {
                console.log(`hello, i am ${people.name}`);

                character(9, function (people) {
                  console.log(`hello, i am ${people.name}`);

                  character(10, function (people) {
                    console.log(`hello, i am ${people.name}`);

                    character(11, function (people) {
                      console.log(`hello, i am ${people.name}`);

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
})
