//Write a JavaScript program to convert a string to title case (capitalize the first letter of each word). 

function toTitleCase(str){
  return str.split(" ").map( word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}                                    
// Example usage:
const input = "hello world from javascript";

console.log(toTitleCase(input));
