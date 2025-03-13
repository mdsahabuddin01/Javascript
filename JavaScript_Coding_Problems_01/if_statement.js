/* Given a number, you have to use the if statement to print "Big" (without quotes) 
if the given number is greater than 100. The statement "Number" (without quotes)
will be printed regardless. Just write an if statement at the mentioned place
that prints "Big" if the given number is greater than 100. */

//User function Template for javascript

class Solution {
    utility(number) {
        if (number > 100){
          console.log("Big");
        }
        
        console.log("Number");
    }
}

const solution = new Solution(); // Create an instance of the Solution class
//console.log(solution.utility(10));// Call the addition method on the instance

solution.utility(10)
