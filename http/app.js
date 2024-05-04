const http = require('http');

const server= http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("Welcome to our home page.");
        res.end();
        return;
    }
    if(req.url==='/about'){
        res.end(`<h1>This is the about page.</h1>`)
        return;
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We cannot seem to find the page you are looking for</p>
    <a href='/'>Turn Back</a>`)
});

server.listen(5000);