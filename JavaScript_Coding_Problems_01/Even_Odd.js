//Given a positive integer n, determine whether it is odd or even. 
//Return true if the number is even and false if the number is odd.
class Solution {

    isEven(n) {
        if ( n % 2 === 0){
            return true;
        } else {
            return false;
        }
    }
}


/*

class Solution {
    isEven(n) {
        // Return true if n is even, otherwise false
        return n % 2 === 0;
    }
}

const result = new Solution();
console.log(result.isEven(39)); // This will print true or false
*/
