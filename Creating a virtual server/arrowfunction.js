const http=require('http');


http.createServer((req,resp)=>
{
    resp.write("<h1>hello this is arpit yadav 2nd method </h1>");
    resp.end();
}).listen(503);

