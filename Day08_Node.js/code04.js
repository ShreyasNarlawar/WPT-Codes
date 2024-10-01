const http = require("http");
const PORT = 1300;
const myModule=require('./demo.js');


const server = http.createServer((request, response) => {
    var x = 4;
    var y = 6;
    
    var z = myModule.sum(x,y);
    
    response.write(`Sum of ${x} and ${y} is ${z}`);
    response.end();
});

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});
