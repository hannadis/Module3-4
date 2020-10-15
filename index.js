

const age = 20; // this shows the age that you are trying to access

if(age > 18){ //this is the age you have to be to access - 
    console.log("You have age"); //this shows that you have age if you are over 18
} else if(age < 15){// used if you want to check another condition
    console.log("you deff dont have access");
} else {
 console.log('you are not old enough'); //this will be false if your age is under 18 and you cant access
}

if(age >= 18) { // bigger and equal means that if you are 18 or older you can pass
    console.log("you can pass");
 } else {
     console.log("you cant pass");
 }
// a single = is usually assigned to create a variable
 if(age === 18) { // using the === is to check the numbers - and to compare them
     console.log("Available")    
    } else {
    console.log("not available")
    }
// a number should be compared to a number not to a string ('18') <--- Not like this

const group1 = 5;
const group2 = 2;
//if we want to add the second group in too we need to do && 
if(group1 === 5 && group2 === 5) { //if these are correct we get the answer that you got a double
    console.log("yaaazzzzz double"); // both of the statements need to be true(correct)
} else {
    console.log("naaaahhhh"); 
}

//so this will check through both and the first group is true and the second one is not 
//so we will not get the preferred answer, it will not be a double 



const group3 = 5;
const group4 = 2;

if(group3 === 5 || group4 === 5) { //if you only want one value to be correct you have to use ||
    console.log("yaaaz"); 
} else {
    console.log("no"); 
}

// || this only checks one value - also called the "or" oppirator 
// as long as one value is correct we will get into the if function

var myAge = 25;
if(myAge >= 19 && myAge <= 30) { // here are two conditions- first one is over the age of 19 and the second is under the age of 30

}


let z = true;
console.log(!z) // if we use ! it inverts the value we put it - so it inverts every expression that is put in there

const number = 5
let result

if(number >= 50) {
    result = 'not fifty!'
} else {
    result = 'could be worse'
}

// ternary 
// everything that goes infront of the ? is your "if"


//     if condition     true result    false result 
result = number >= 50 ? 'not fifty' : 'could be worse'

// its going to give me the result of true or false depending on the  "50 number"

// the ternary makes the code simpler but does the same as before with the if statement
// can be added to one line instead of many lines

console.log(result)


// the switch is used to control the flow of a program. 
// starts with the "switch" keyword followed by an expression
// the break statement is used to exit the switch structure 
// if it is not used you can use a bracket { at the end of the structure

var month = 4;

switch(month)
{
    case 1:
        console.log("january");
        break;
    case 2: 
        console.log("february");    
        break;
    case 3: 
        console.log("march");    
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    case 6:
        console.log("june");
        break;
    case 7:
        console.log("july");
        break;
    // if a month does not match any of the months here you make :
    default:
        console.log("invalid")
    }   