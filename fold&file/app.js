var fs = require("fs");
 
// This is Asynchronous way of reading a file
fs.readFile('file.txt', function(err, data){
    if(err){
        console.log("Place try again and type in the right file name");
    } else{
        console.log("Async data is  " + data.toString());
    }
});

// This is synchronous way of reading a file

var data = fs.readFileSync('file.txt');
console.log("Synchronous data is " + data.toString());
console.log("This is the end");