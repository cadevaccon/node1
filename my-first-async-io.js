const fs=require('fs');
let data;
fs.readFile(process.argv[2], function (err, data) {
    //this is the callBack function
       if (err) return console.error(err);
       
       
let ms =data.toString();
let k=ms.split('\n');
console.log(k.length-1)
    });
