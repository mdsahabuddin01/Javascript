//Write a JavaScript program to find the maximum number in an array. 

let num = 0;

function maxNumber(value){
 if (value > num){
   num = value;
 }
 return num;
}


const arr = [10, 20, 30, 40, 50, 30, 60, 10];

arr.forEach(maxNumber);

console.log(num);
