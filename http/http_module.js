const http = require('http');

const server = http.createServer();

server.on('request', ()=>{
    console.log('request');
})

server.on('connection', ()=>{
    console.log('Connection');
})

server.on('close', ()=>{
    console.log('Close');
})

server.listen(50000, ()=>{
    console.log('서버가 동작 중입니다, ...');
})

const testClose = function(){
    server.close();
    console.log('서버가 종료되었습니다.');
}

setTimeout(testClose, 10000);
