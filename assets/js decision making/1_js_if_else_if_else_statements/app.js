// You can chain as many else if 

let rating = 3;

if (rating === 1){
    console.log("YOU ARE A SUPERSTAR!")
} else if (rating === 2) {
    console.log("MEETS EXPECTATIONS")
} else {
    console.log("GAME OVER")
}


// Dissecting it all

/*

if (rating === 1) {
    console.log("YOU ARE A SUPERSTAR!")
} 

else if (rating === 2) {
    console.log("MEETS EXPECTATIONS")
} 

else {
    console.log("GAME OVER")
}

*/

// Another example

function getColor(phrase) {
    //WRITE YOUR CODE BETWEEN THIS LINE: ↓ ↓ ↓ ↓ 
    if (phrase === 'stop') {
        console.log('red')
    } else if (phrase === 'slow') {
        console.log('yellow')
    } else if (phrase === 'go') {
        console.log('green')
    } else {
        console.log('purple')
    }

}
getColor();

// Nesting conditionals

const password = prompt("please enter a new password")

// Password must be 6+ characters
if (password.length >= 6){
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password")
    } else {
        console.log("Password cannot contain spaces")
    }  
}else{
    console.log("password too short, must be 6+ characters")
}





