// While Loop

// User Input 
// Game Loops 

/*

// Example 1

let count = 0;
while (count < 10){
    count++;
    console.log(count)
}

*/

// Example 2

/*

while(!gameOver){
    //player 1 move
    //player 2 move
}

*/

// Example 3

/*

const SECRET = "BabbyHippo";

let guess = prompt("guess the secret word...");

while (guess !== SECRET){
    guess = prompt("guess the secret word...")
}
alert("correct")


*/


// Example 4

/*

let input = prompt("Hey, say something!")

while (true){
 input = prompt(input);
  if (input.toLowerCase() === "stop copying me"){
    break;
  }
}

alert("Ok, sorry about that")

*/

let maximum = parseInt(prompt("guess my number"))
while (!maximum){
     maximum = parseInt(prompt("Enter a valid number"));
}


const targetNum = Math.floor(Math.random() * maximum) + 1

let guess = parseInt(prompt("Enter your first guess"))
let attempts = 1;
// let lives = [];



while (guess !== targetNum){
    attempts++
     if (guess > targetNum){
        guess = parseInt(prompt("Too high! Enter a new guess: "))
    }if (guess < targetNum) {
        guess = parseInt(prompt("Too low! Enter a new guess: "))
    }
}
   
   




alert(`you got it, it took you ${attempts} guesses`)



// while (input !== guessMyNumber){
//     input = prompt("guess again")
// }

// alert("You win")


