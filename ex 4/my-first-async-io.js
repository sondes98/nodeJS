var fs = require('fs')
var file = process.argv[2] //takes the 3rd item given to the command line

fs.readFile(file, function (err, contents) { //read a file, and check for errors as well as content  
  var lines = contents.toString().split('\n').length - 1 //-1 (so we dont count the newline)
  console.log(lines) //log the num of lines
})
