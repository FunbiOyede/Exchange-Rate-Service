const os = require('os');
const cpu = os.cpus();
const app = require('./src/app/app');
const cluster = require('cluster');
// if(cluster.isMaster){
//     cpu.forEach((cpu,i) =>{
//        cluster.fork()
     
//     })
// }else{
//     app.start();
// }
app.start();