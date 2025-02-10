// from 1 to 100, numbers divisible by 3 and 5 both
let arr = [];
function fb(range){
    for (let i = 1; i <= range; i++){
        if (i%3 === 0 && i%5 === 0){
            console.log(i);
        }
    }
}


console.log(fb(100));
