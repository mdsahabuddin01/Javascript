function isPalindrome(text){
  
  const cleanTxt = text.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanTxt === cleanTxt.split().reverse().join("");
}

const examples = [
  "Level",
  "Race car",
  "No lemon, no melon",
  "Was it a car or a cat I saw?",
  "Hello World!",
  "12321",
  "Step on no pets"
];

examples.forEach(str => {
 if (isPalindrome(str)){
   console.log(`"${str}" is a palindrome.`);
 } else {
   console.log(`"${str}" is a palindrome.`);
 }
});
