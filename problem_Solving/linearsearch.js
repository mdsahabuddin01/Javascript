function linearSearch(arr, val) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return 'not found';
}

console.log(linearSearch(['a', 'b', 'c', 'd', 'e'], 'b'));
