const { isUtf8 } = require('buffer');
const fs = require('fs');


const first= fs.readFileSync('./first.txt','utf8');
const second=fs.readFileSync('./second.txt','utf8');

console.log(first+'---'+second);

fs.writeFile ('newTXT.txt',`this is written by writeFile module. ${first},${second}`,(err,result)=>{
     if(err){
        console.log(err);
        return;
        }
        console.log(result);
    }
   

    )