let myArray1 = [0,1,2,3,4,5,6,7,8,9];
let myArray2Part1 = myArray1.slice(0, 5);
let myArray2Part2 = myArray1.slice(6,10);

let myArray2 = myArray2Part1.concat(myArray2Part2);
console.log(myArray1);
console.log(myArray2Part1);
console.log(myArray2Part2);
console.log(myArray2);