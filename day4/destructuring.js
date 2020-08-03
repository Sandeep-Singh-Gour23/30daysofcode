/*const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
      city: 'Los Angeles'
    }
  };
  
  // console.log( player.address.city );
  
  const { name, club, address: { city } } = player;
  
  // console.log(`${name} plays for ${club}`);
  
  console.log(`${name} lives in ${city}`);*/

  //CHALLENGES


const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const { name, age, projects: { diceGame } } = student;

console.log(name);
console.log(age);

console.log(diceGame);

// DESTRUCTURING ARRAY

let [firstName, middleName, lastName] = ['Dylan', 'Coding God', 'Israel'];

lastName = 'Clements';

console.log(lastName)