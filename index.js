const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1 style="color: red">Hello World!</h1>');
        res.write('<p>I wonder what else we can send...</p>');
        res.end();
    }else if(req.url ==='/test'){
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.write('<h1 style="color: red">THis is test!</h1>');
        res.write('<p>I wonder what else we can send...</p>');
        res.end();
    }else{
        res.statusCode = 404;
        res.write('Error! no response');
        res.end();
    }
})
server.listen(port, hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})