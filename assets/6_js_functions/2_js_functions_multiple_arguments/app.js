


//             George     Clooney
function greet(firstName, lastName){

    console.log(`Hey there, ${firstName} ${lastName}!`)

}

//     1st - then - 2nd
// ${firstName} ${lastName}
greet('George', 'Clooney')



// Repeat Function

function repeat(str, numTimes){

    let results = '';

    for(let i = 0; i < numTimes; i++){
        results += str
    }

    console.log(results)

}

repeat('$', 5)