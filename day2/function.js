function add(num1 , num2){

    return  num1+num2;
}

console.log(add(10,20));
console.log(add(40,50));
console.log(add(60,70));

//CHALLENGE

function getUserCredentials(firstName, lastName, email) {

    return `${firstName} ${lastName} | ${email}`;
}

let userCredentials = getUserCredentials('Sandeep','Gour','sandeepsinghgour0@gmail.com');

function getPreTaxTotal(cartItems){

    let total =0;
    for(Items of cartItems){

        total += Items.amount * Items.quantity;
    }
    return total;
}

const cartItems = [
    {quantity : 1, amount : 5},
    {quantity: 3, amount: 4},
    {quantity: 10, amount: 1}
];

let preTaxTotal = getPreTaxTotal(cartItems);

function getTaxedTotal(preTaxTotal){
        return preTaxTotal *= 1.08;
}

const finalTaxedTotal = getTaxedTotal(preTaxTotal);

console.log(userCredentials);
console.log(preTaxTotal);
console.log(finalTaxedTotal);