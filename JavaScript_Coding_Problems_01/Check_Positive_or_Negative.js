/*
You will be given a number A. Your task is to print "Positive" if the number is positive, 
print "Negative" if negative and print "Zero" if it is 0 (without adding a line break statement).
*/

class Solution {
    utility(number) {
        if (number > 0){
            console.log("Positive");
        } else if (number = 0) {
            console.log("Zero");
        } else {
            console.log("Negative");
        }
    }
}

const result = new Solution();
result.utility(39); // This will print true or false
