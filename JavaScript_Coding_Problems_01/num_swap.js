/*You are given two numbers a and b. Your task is to swap the given two numbers.

Note: Try to do it without a temporary variable. */



/*class Solution {
    get(a,b){
       //code here
       
    let temp = a;
    a = b;
    b = temp;
    
    return [a, b];
    }
}*/

class Solution {
    get(a, b) {
        // Swap using arithmetic operations
        a = a + b;
        b = a - b;
        a = a - b;
        
        return [a, b];
    }
}


const solution = new Solution();
const result = solution.get(3, 5);
console.log(result[0] + " " + result[1]); // This will print "5 3"
