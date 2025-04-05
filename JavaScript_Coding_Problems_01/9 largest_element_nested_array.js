const nestedArray = [
  [1, 2, 33],
  [4, 15, 6],
  [17, 8, 9]
];

let maxNum = 0;
let length = nestedArray.length;

for (let i =0; i < nestedArray.length; i++){
  for (let j = 0; j < nestedArray.length; j++){
   if (maxNum < nestedArray[i][j]){
    maxNum = nestedArray[i][j];
  } 
  }
}

console.log(maxNum);
