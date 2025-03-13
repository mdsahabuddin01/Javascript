/* Given a number, you have to use the if statement to print "Big" (without quotes) 
if the given number is greater than 100, and use the else statement to print "Number"
(without quotes) when the number is smaller than or equal to 100.
Note: You should print the newline after printing"Number" or"Big". */

//User function Template for javascript


class Solution {
    utility(number) {
        // write your if statement here
        if (number > 100){
            console.log("Big");
        } else {
            // write your else statement here
            console.log("Number")
        }
        
        
    }
}

const solution = new Solution(); // Create an instance of the Solution class
//console.log(solution.utility(10));// Call the addition method on the instance

solution.utility(160)
