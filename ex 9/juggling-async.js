const http = require('http');
const url = process.argv[2];

let content = [];
let count = 0;

const arguments = process.argv;
let urlArray = arguments.filter(function pullUrls(element, index, array) {
    return index >= 2;
});

function printResults() {
    for (var i = 0; i < 3; i++) {
        console.log(content[i]);
    }
}

function httpGet(index) {
    http.get(urlArray[index], function(response){
        response.on('data', function(data){

            let newData = data.toString();
            //check if undefined
            if(typeof content[index] !== 'undefined'){
              content[index] = content[index] + newData;
            }else{
              //add newData if undefined
              content[index] = newData;
            }

        })
        response.on('end', function(){
            count++;
            if (count === 3){
                printResults();
            }
        })
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i);
}