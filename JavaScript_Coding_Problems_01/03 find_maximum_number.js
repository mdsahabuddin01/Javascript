//Write a JavaScript program to find the maximum number in an array. 

function findMaxNumber(arr){
  if (arr.length === 0){
    console.log("Array is empty");
  }
  
  let max = arr[0];
  
  arr.forEach(function(num){
    if(num>max){
      max = num;
    }
  })
  
  return max;
}


const numbers = [5, 99, 12, 8, 21, 3, 42, 86];

const maxNumber = findMaxNumber(numbers);

console.log("The maximum number is: "+ maxNumber);
