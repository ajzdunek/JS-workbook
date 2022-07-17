// Return

function add(x, y){
    let sum = x + y
    return sum;
}

const sum = add(13, 9)
console.log(sum)


// Detecting if numbers === true

function addMore(x, y) {

    if(typeof x !== 'number' || typeof y !== 'number'){
        return false
    }
    return x + y;
}