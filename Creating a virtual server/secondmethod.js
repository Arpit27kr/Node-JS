
const http=require('http');



function datacontrol(req,resp)
{
    resp.write("<h1>hello this is arpit yadav 2nd method </h1>");
    resp.end();
}

http.createServer(datacontrol).listen(501);

