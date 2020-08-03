let total = 0;

for (let i = 0; i < 5; i++)
{
    console.log(i);
    total += i ;
    console.log(total);
}

let sum = 0;

let numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90];

for (let j = 0; j < numArray.length; j++)
{
    console.log(numArray[j]);
    sum += numArray[j];
}

console.log(sum);

//CHALLENGE

const cartItems = [
    { quantity: 1, price: 5},
    { quantity: 3, price: 4},
    { quantity: 10, price: 1},
];
let total = 0;

/*for(let i = 0; i < cartItems.length; i++)
{
    total += cartItems[i].price * cartItems[i].quantity;
}*/

for (const Item of cartItems){

    total += Item.price * Item.quantity;
}

total *= 0.08;
console.log(total);

