/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <title>AJAX examples</title>
</head>

<body>
        <div>
            
            <h1> AJAX </h1>
            
            <p><button id="get" > Get Data</button></p>

            <p><button id="send" > Send Data</button></p>
        </div>
    
        <script src="./script.js"></script>
</body>
</html>
*/

function GetSendRequest(method, url, data) {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();

        xhr.onload = function() {
            resolve(this.response);
        };

        xhr.onerror = function() {
            reject(new Error('Request failed'));
        };

        xhr.open(method, url);
        xhr.responseType = 'json';

        if (method === 'POST' && data) {
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(data);
        } else {
            xhr.send();
        }
    });
    return promise;
}

function getData() {
    GetSendRequest('GET', 'https://jsonplaceholder.typicode.com/todos/1').then(responseData => {
        console.log(responseData);
    }).catch(error => {
        console.error('Error:', error);
    });
}

function sendData() {
    GetSendRequest('POST', 'https://jsonplaceholder.typicode.com/posts', JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    })).then(responseData => {
        console.log(responseData);
    }).catch(error => {
        console.error('Error:', error);
    });
}

const getbutton = document.getElementById("get");
const sendbutton = document.getElementById("send");

getbutton.addEventListener("click", getData);
sendbutton.addEventListener("click", sendData);
