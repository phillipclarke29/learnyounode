var fs = require('fs');
var count = undefined;

fs.readdir(process.argv[2], function(err, list){
  var count = 0;
  var files = [];
  for(var i = 0; i < list.length; ++i){
      if (list[i].includes(".md")){
      console.log(list[i]);
      }
  }

});
