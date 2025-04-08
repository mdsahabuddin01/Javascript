//Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

function toTitleCase(str){
  return str.replace(/\b\w/g, char => char.toUpperCase());
  
}
// Example usage:
const input = "hello world from javascript";

console.log(toTitleCase(input));
