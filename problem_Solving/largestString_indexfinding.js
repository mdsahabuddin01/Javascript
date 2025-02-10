// how to find  string + index

function longestStr(names){
    let longestWord = '';

    for(let name of names) {
        if(name.length > longestWord.length ){
            longestWord = name;
        }
    }
    return [longestWord, names.indexOf(longestWord)];

}

console.log(longestStr(["harry", "bonn", "jack", "sailor"]));
