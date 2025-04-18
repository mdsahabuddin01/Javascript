
// Given a number N in the form of string, 
// your task is to find the remainder when the number is divided by 7.
/*
class Solution {
    // Function to find remainder
    findRemainder(N) {
        let remainder = 0;

        // Process each digit in the string
        for (let i = 0; i < N.length; i++) {
            // Convert the current character to a number and update the remainder
            remainder = (remainder * 10 + parseInt(N[i])) % 7;
        }

        return remainder;
    }
}
*/


class Solution
{
    //Function to find remainder
    findRemainder(N)
    {
        //// Trim the input to remove any leading or trailing spaces
        N = N.trim();
        //N = BigInt(N);

        // Convert the string to a number
        const num = Number(N);
        
        // Checking if the conversion was successful
        if (isNaN(N)){
            throw new Error("Invalid");
        }
        
        return num % 7;
        //return N % BigInt(7);
        
    }
}
const result = new Solution();
console.log(result.findRemainder(" 40 "));
