// const p = document.getElementById("demo");

// p.innerHTML=`today's data and time is: ${Date()}`;

function validateForm(){
    const form = document.forms['myform'];
    const value = form['fname'].value;


    if (value === ''){
        alert('you must type a name');
    }
    return false
}
