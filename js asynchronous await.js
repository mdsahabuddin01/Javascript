const paymentSuccess = true;
const marks = 80;

function enroll(){
    console.log("Enrolled");

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if (paymentSuccess){
                resolve();
            } else {
                reject()
            }
        }, 2000);
    });
    return promise;
}

function progress(){
    console.log("Progressing..");

    const promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if (marks >= 80){
                resolve();
            } else {
                reject("try again!");
            }
        }, 2000);
    })
    return promise;
}

function certificate(){
    console.log("Generated");

    const promise = new Promise(function(resolve){
        setTimeout(function(){
            resolve("Congrats!");
        },2000);
    });
    return promise;
}


// enroll()
//     .then(progress)
//     .then(certificate)
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(err){
//         console.log(err);
//     })

//

async function course() {
    try{
    await enroll();
    await progress();
    const message = await certificate();

    console.log(message);
    } catch (err){
        console.log(err);
    }
}
course();

