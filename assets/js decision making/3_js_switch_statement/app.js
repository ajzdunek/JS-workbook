/* 

The switch statement is another control-flow 
statement that can replace multiple if statements.

*/

const day = 5;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break
    case 3: 
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
    case 7:
        console.log("It's the weekend!")
        break;
    default:
        console.log("I don't know -_-")
}
