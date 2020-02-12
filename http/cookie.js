const http = require('http');

http.createServer((req, res)=>{
    //cookie
    res.writeHead(200, {
    'Content-Type' : 'text/html',
    'Set-Cookie' : ['soju = grilledPork', 'beer = chicken']
    })
    //cookie output

    res.end(`<h1>${req.headers.cookie}</h1>`);
    }).listen(50000, ()=>{
        console.log('서버가 동작중입니다.');
});