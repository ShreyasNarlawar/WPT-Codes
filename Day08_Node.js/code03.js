const http = require('http');
const PORT = 1112;
const server = http.createServer((request,response)=>{

    var x = 4;
    var y = 12;
    response.write(`sum of ${x}and${y} is ${x+y}`);
    response.end();
});
server.listen(PORT,()=>{
    console.log(`Server is Waiting or Listening on ${PORT}`);
})
    