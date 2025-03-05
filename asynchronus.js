const paymentsuccess = true;
const marks = 70;
function enroll(callback){
    console.log('course enrollment is in progress');

    setTimeout( function(){
        if(paymentsuccess){
            callback();
        } else {
            console.log('Payment Failed!');
        }
    }, 2000);
}

function progress(callback){
    console.log('Course on progress....');

    setTimeout(function(){
        if(marks <= 80){
            callback();
        } else {
            console.log('Better luck next time!');
        }
    },3000);
}

function certificates(){
    console.log('Generating Certificate');

    setTimeout(function(){
        console.log('Congrats! you got this.');
    },1000);
}

enroll(function(){
    progress(certificates)
});
