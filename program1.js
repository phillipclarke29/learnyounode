var fs = require('fs')
var lines = ''

buff = fs.readFileSync(process.argv[2])

lines = buff.toString().split('');

var count = 0;
for(var i = 0; i < lines.length; ++i){
    if(lines[i] == '\n')
        count++;
}

console.log(count);
