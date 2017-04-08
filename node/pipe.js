'use strict';
var fs =require('fs');
var rs = fs.createReadStream('output.txt');
var ws = fs.createWriteStream('input.txt');
rs.pipe(ws);