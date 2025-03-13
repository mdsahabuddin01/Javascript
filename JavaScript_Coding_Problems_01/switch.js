/*Given a number, you have to use a switch statement to return "One" 
if the given number is equal to 1, "Two" if the number is 2 and so on till 9 ("Nine")
else return "Unknown"(without quotes). */



class Solution {
    utility(number) {
        switch (number) {
            case 1:
                return "One";
            case 2:
                return "Two";
            case 3:
                return "Three";
            case 4:
                return "Four";
            case 5:
                return "Five";
            case 6:
                return "Six";
            case 7:
                return "Seven";
            case 8:
                return "Eight";
            case 9:
                return "Nine";
            default:
                return "Unknown";
        }
    }
}

// Example usage:
const solution = new Solution();
console.log(solution.utility(1));  // This will print "One"
console.log(solution.utility(5));  // This will print "Five"
console.log(solution.utility(50)); // This will print "Unknown"
