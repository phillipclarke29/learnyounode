var fs = require('fs')
var lines = ''

buff = fs.readFileSync('program.js')

lines = buff.toString();

console.log(lines)
