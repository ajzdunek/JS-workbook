// Empty Array
let students = [];

// Array of strings
let colors = ['red', 'orange', 'yellow'];

// Array of numbers
let lottoNums = [19, 22, 56, 12, 51];

// Mixed Array
let stuff = [true, 68, 'cat', null];

// Index - arrays are Indexed
let typesOfGuitars = ["Fender", "Gibson", "Kramer", "Ibanez", "Vox"]
console.log(typesOfGuitars[3]) // Ibanez

/*
Array Methods

Push - add to end
Pop - remove from end
Shift - remove from start
Unshift - add to start


*/

/*

concat - merge 
includes - looks for a value
indexOf - just like string.indexOf
join - creates a string from an array
slice - copies a portion on an array
splice - removes/replaces elements
sort - sorts an array


*/

// more resources on this mdn web docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Multi-Dimensional Arrays

const gameBoard = [
    ["O", null, 'X'],
    [null, "X", "O"],
    ["X", "O", null]
]

console.log(gameBoard)

