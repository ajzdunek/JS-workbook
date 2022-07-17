/*

Boilerplate for...of

for (variable of iterable){
    statement
}

*/


const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer']

for (let sub of subreddits) {
    console.log(sub)
}

for (let greeting of 'hello world'){
    console.log(greeting)
}


const cars = {
    modelOne: 'Honda',
    modelTwo: 'Nissan', 
    modelThree: 'Ford'
}

for (let car in cars){
    console.log(`${car} model ${cars[car]}`)

}

