/*Create the multiplication table from 1 to 10 for a given number N and return the table as an array.*/



class Solution {
  getTable(N) {
    const arr = [];
    for (let i = 0; i < 10; i++) {
      arr[i] = N * (i + 1);
    }
    return arr;
  }
}

// Example usage:
const solution = new Solution();
//console.log(solution.getTable(9));

const result = solution.getTable(9);
console.log(result.join(' ')); 
