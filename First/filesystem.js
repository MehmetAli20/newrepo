const { log } = require('console');
const {readFile} = require('fs');
const { reject, get, result } = require('lodash');
const { resolve } = require('path');

const getText=(path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path,'utf8',(err,data)=>{
    if(err){
        reject(err)
    }
    else{
        resolve(data)
    }
})
    })
}

const start=async()=>{
    try {
        const first=await getText('first.txt');
        const second=await getText('second.txt');
        console.log(first+'--- '+second);
    } catch (error) {
        console.log(error);
        
    }
}
start();


/* getText('../Aworkingarea/gibberish.txt')
.then((result)=>console.log(result))
.catch((reject)=>console.log(err))
 */