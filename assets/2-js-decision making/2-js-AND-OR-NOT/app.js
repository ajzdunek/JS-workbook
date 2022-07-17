/*

AND - OR - NOT

&&    ||    !

*/

// Example

/*

1 <= 4 && 'a' === 'a'; // true

9 > 10 && 9 >= 9; // false

'abc'.length === 3 && 1+1 ===4; // false

*/


// && (AND) 

/*

const password = prompt("Enter your password");

if (password.length >= 6 && password.indexOf(' ') === -1){
    console.log("Valid Password")
} else{
   console.log("Incorrect format for password, try again")
}

// || (OR) only care if one is true

let yourAge = 76;

if (yourAge < 6 || yourAge >= 65){
    console.log('you get in for free')
}else{
    console.log('That will be $10 please')
}

*/

// || (OR) w/ && (AND)

const age = 7;

if (age >= 0 && age < 5 || age >= 65){
    console.log("free")
}else if (age >= 5 && age < 10){
    console.log("$10")
}else if (age >= 10 && age < 65){
    console.log("$20")
}else{
    console.log("Invalid Age!")
}


// ! (NOT)

const firstName = prompt("enter your first name")
if (!firstName){
    prompt("try again")
}
