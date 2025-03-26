//Write a JavaScript function that takes an array of numbers and
//returns a new array with only the even numbers. 

function evenNumArray(arr){
  let evenList = [];
  
  arr.forEach(function(num){
    
    if(num%2 === 0){
      
     evenList.push(num);
     
    }
  })
  return evenList;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

console.log("Here is the even number array:", evenNumArray(arr));
