// nested loop

/*

Example 1

for (let i = 1; i <= 10; i++){
    console.log(`i is:${i}`)
    for (let j = 1; j < 4; j++){
        console.log(`     j is:${j}`)
    }
}


*/


// Example 2

const seatingChart =[
    ['Phil', 'Dil', 'Lil'],
    ['Will', 'Bill', 'Gill'],
    ['Pil', 'Jil', 'Still']
]

for (let i = 0; i < seatingChart.length; i++){
    const row = seatingChart[i];
    console.log(`ROW #${i + 1}`)
        for (let j = 0; j < row.length; j++){
        console.log(row[j])
        }
}

