let example = {
firstName : 'Sandeep Singh',
lastName : 'Gour',

address: {

    city: 'Indore',
    state: 'MP',
    landmark: ['garden', 'bookshop', 'kiran general Store']
},
age: 20,
age: 21,       //we can also reinitialise the properties.
cats: ['Milo', 'Tito', 'Achieles']
};


example.age = 22; //Here,through out the object we again can reinitialise the same properties. 

console.log(example.address.landmark);

console.log(example.age);

console.log(Object.keys(example));

console.log(Object.values(example));

console.log(example.hasOwnProperty('firstName'));

console.log(example.hasOwnProperty('firstName2'));

// OBJECT CHALLENGE

const example1 = {

firstName: 'Sandeep Singh',
lastName: 'Gour',
};

example1['address'] =  {

    city: 'Indore',
    state: 'MP'
};

example1.Hobbies =  ['cricket', 'swimming', 'reading'];

example1.isGoldMember = true;

console.log(example1);
