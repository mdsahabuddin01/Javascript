//Reverse a String in JavaScript
/// Using split(), reverse() and join() Methods

let s = "london Underground";

let reverse_string = s.split("").reverse().join('');

let reverse_string_02 = [...s].reverse().join('');

console.log(reverse_string_02,"\n", reverse_string_02);

