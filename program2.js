var fs = require('fs')
var count = undefined

fs.readFile(process.argv[2], function(err, contents){
var lines = contents.toString().split('\n').length - 1

console.log(lines);
})
