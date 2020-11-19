const fs=require('fs');
let buf=fs.readFileSync(process.argv[2]);
let ms =buf.toString();
let k=ms.split('\n');
console.log(k.length-1)