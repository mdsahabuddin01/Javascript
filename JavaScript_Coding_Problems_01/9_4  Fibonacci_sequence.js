//Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms. 
console.log(generateFibonacci(7));


//0,1,1,2,3,5,8


function generateFibonacci(n) {
    if (n <= 0) return [];

    const fib = [0];

    if (n === 1) return fib;

    fib.push(1);

    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }

    return fib;
}
