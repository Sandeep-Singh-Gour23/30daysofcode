let example = 5;

if(example === 5 || false === true){
   console.log('Runs');

}else if(false) {
    console.log('else if');

}else{
console.log('else');    
}

//CHALLENGE 1

let age = 21;

if (age <= 12){
   console.log('child');
}
else if(age > 12 && age < 20){

    console.log('teenager');
}else{
    console.log('adult');
}

//CHALLENGE 2

console.log(10 === 10 && 5 < 4); 
//false

console.log(10 === 10 || 5 < 4);
//true

console.log((5 >= 5 || 4 > 4) && 3 + 2 === 5);
//true






