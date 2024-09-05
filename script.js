//idea:----Start With String Number And Boolian______

//Numbers
let age = 100;
let age2 = age;
console.log(age, age2);
age = 200;
console.log(age, age2);

//String
let name1 = 'Mosaddik';
let name2 = name1;
console.log(name1, name2);
name1 = 'Masum';
console.log(name1, name2);

//Boolian
let isArray = true;
let isArray2 = isArray;
console.log(isArray, isArray2);
isArray = false;
console.log(isArray, isArray2);

//idea:--------Start With SArray__________

const player = ["Mosaddik", "Sadique", "Sajid"];
const player2 = player.slice();
console.log(player, player2);
player[1] = "Rahi";
console.log(player, player2);


const player = ["Mosaddik", "Sadique", "Sajid"];
const player3 = [...player];
console.log(player, player3);
player[1] = "Rahi";
console.log(player, player3);

//idea:------Spread Operator__________

const myArray = [1, 2, 3];
const newArray = [...myArray, 4, 5, 6];
console.log(myArray);
console.log(newArray);

//concat method
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8];
const concat = [...array1, ...array2];
console.log(concat);

// object concat
const myObj = { firsName: "Ridiya", lastName: "Rahi" };
const myObj2 = { name: 'Mosaddik Billah', age: 17 };
const concat2 = { ...myObj, ...myObj2 };
console.log(concat2);
