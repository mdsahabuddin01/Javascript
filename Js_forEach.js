//Calculates the square of every element of the array using forEach() method.
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const Sq = [];
let Sum = 0;

arr.forEach((item) => {
  //Sum of every element
  Sum += item;
  //square of every element
  Sq.push(item*item);
})

console.log(`Square: ${Sq} \nSum: ${Sum}`);



