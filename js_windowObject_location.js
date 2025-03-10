/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document Object Model</title>
</head>
<div id = 'href'></div>
<div id = 'hostname'></div>
<div id = 'pathname'></div>
<div id = 'protocol'></div>
<div id = 'port'></div>

<div>
    <input type="button" value="Load w3schools.com" onclick="loadw3s()"/>
</div>

<body>
    <script src="script.js"></script> 
</body>
</html>

*/

// select dom elements

const href = document.getElementById("href");
const hostname = document.getElementById("hostname");
const pathname = document.getElementById("pathname");
const protocol = document.getElementById("protocol");
const port = document.getElementById("port");


// show window location object properties values

href.innerHTML = "windom href: " + window.location.href;
hostname.innerHTML = "windom hostname: " + window.location.hostname;
pathname.innerHTML = "windom pathname: " + window.location.pathname;
protocol.innerHTML = "windom protocol: " + window.location.protocol;
port.innerHTML = "windom port: " + window.location.port;


function loadw3s(){
    window.location.href = "https://www.w3schools.com";
}
