let MyAnswer = 'E';

switch(MyAnswer){

    case 'A':
        console.log('A is wrong.');
        break;

    case 'B':
        console.log('B is wrong.');
        break;

    case 'C':
        console.log('C is correct.');
        break;

    default :
    console.log('Not a real answer.');

}

//CHALLENGE 

const userType = 'super shopper';

switch (userType) {

    case 'guest' :
        console.log("Are you want to upgrade to a 'shopper'");
        break;

    case 'shopper' :
        console.log("Are you want to upgrade to a 'super shopper'");
        break;

    case 'super shopper' :
        console.log("you are the best");
        break;

    default :
    console.log("you are a guest");

}