const http = require('http');
const PORT = 1112;
const server = http.createServer((request,response)=>{
    response.write("Hello Dear...");
    response.end();
});
server.listen(PORT,()=>{
    console.log(`SERVER is Listening ${PORT}`);
});