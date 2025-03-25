//Write a JavaScript function to check if a given string is a palindrome
//(reads the same forwards and backwards). 

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

  // Reverse the string
  const reversedStr = cleanStr.split('').reverse().join('');

  // Check if original and reversed are the same
  return cleanStr === reversedStr;
}


console.log(isPalindrome("Racecar"));        // true
console.log(isPalindrome("Hello"));          // false
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
