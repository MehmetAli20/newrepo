const { log } = require('console');
const os = require('os');
const name=os.userInfo();

/* console.log(name);
 */
console.log(`system uptime is: ${os.uptime} seconds.`)

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    availableMem:os.freemem(),
} 
console.log(currentOS);