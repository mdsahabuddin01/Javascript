// how many vowels in a sentence

const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];



function VowelCount(L){
    let count = 0;
    let letters = Array.from(L);

    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;

}

console.log("Number of vowel in the sentences: " + VowelCount("I love BangladEsh"));
