var alejandro = {
  name: 'Alejandro',
  surName: 'Ortegano',
  age: '23',
  engineer: true,
  chef: false,
  dj: false,
  developer: true
}

function printProfessions(people){
  console.log(`${people.name} is:`);
  if (people.engineer){
    console.log('Engineer');
  }
  if (people.chef){
    console.log('Chef');
  }
  if (people.dj){
    console.log('Dj');
  }
  if (people.developer){
    console.log('Developer');
  }
}

printProfessions(alejandro)
