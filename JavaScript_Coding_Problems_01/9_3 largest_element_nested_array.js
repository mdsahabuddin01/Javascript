function findMaxOptimised(arr){
  let max = -Infinity;
  
  function recursiveSearch(subArr){
    for (let item of subArr){
      if (Array.isArray(item)){
        recursiveSearch(item);
      } else {
        if (item > max) max = item; 
      }
    }
  }
  
  recursiveSearch(arr);
  return max;
}

console.log(findMaxOptimised([10, [30, [70, 20]], 40])); // Output: 7
