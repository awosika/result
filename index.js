const http = require('http');
const fs = require('fs');
const fetch = require('node-fetch');

let response = fetch('http://jsonplaceholder.typicode.com/posts');

//Get Request
fetch('http://jsonplaceholder.typicode.com/posts')
// Handle success
.then(response => response.json())
.then(data => obj= data) 
.then(() => console.log(obj))
.catch(err => console.log('Request Failed', err));




//fs.writeFile('posts.json', 'http://jsonplaceholder.typicode.com/posts', function(){
  //  console.log('file successfully written')
//});



//const server = http.createServer(function(req, res){
  //res.writeHead(200);
  //res.end('data copied from API')
//});



const server = http.createServer(function(req , res){
    let stringedData = JSON.stringify(obj, null, 2)
    fs.writeFileSync('posts.json',  stringedData);
    res.writeHead(200);
    res.end('Data copied from API and written to posts.json file')
});

server.listen(7000, function(){
    console.log('server is running')
});