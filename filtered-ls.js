const fs=require('fs');
const files=process.argv[2];
const filter=process.argv[3];

fs.readdir(files,function(err,data){
    if (err) return console.error(err);
    
    let table;
    table=(data.filter(el=>el.includes("."+filter)));

    table.filter(el=>console.log(el));

}
)