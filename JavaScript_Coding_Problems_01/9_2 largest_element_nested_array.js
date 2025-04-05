
const findMax = arr => Math.max(...arr.flat(Infinity));

console.log(findMax([
  [1, 2, 31],
  [4, 15, 6],
  [17, 80, 9]
]));
