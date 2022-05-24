var fs = require('fs');
var readableStream = fs.createReadStream('file.txt');
var writeableStream = fs.createWriteStream('outfile.txt');
readableStream.pipe(writeableStream);