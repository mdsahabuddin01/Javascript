//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
function generateFibonacci(n) {
  let fibArr = [];
  
  if (n <= 0){
    return fibArr;
  }
  fibArr.push(0);
  
  if (n == 1){
    return fibArr;
  }
  fibArr.push(1);
  
  for (let i = 2; i < n; i++){
    let fibnum = fibArr[i - 1] + fibArr[i - 2];
    fibArr.push(fibnum);
  }
  
  return fibArr;
}

console.log(generateFibonacci(25));
