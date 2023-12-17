const http = require('http');
const os = require('node:os');
const currentUser = os.userInfo().username;

// Practical task 1
const path = require('path');
const osType = os.version();
const systemOperatingTimeInMinutes = (os.uptime()/60).toFixed(2);
const currentDir = __dirname;
const currentFile = __filename;
const serverFileName = path.basename(currentFile);

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write((`<h1>System information</h1>
    <p>Current user name: ${currentUser}</p>
    <p>OS type: ${osType}</p>
    <p>System worktime: ${systemOperatingTimeInMinutes} minutes</p>
    <p>Current work directory: ${currentDir}</p>
    <p>Server file name: ${serverFileName}</p>`));
    res.end();
}).listen(5000);

// Practical task 2
// const myModule = require('./personalModule.js');
// const currentDate = new Date();
// const greetingMessage = myModule.greetingMessage(currentUser);

// http.createServer(function (request, response) {
//   response.writeHead(200, { 'Content-Type': 'text/html' })
//   response.write(`<p>Day of request: ${currentDate}</p>
//                   <p> ${greetingMessage}</p>`);
//   response.end();
// }).listen(5000);