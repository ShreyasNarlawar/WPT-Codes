const http = require("http");
const PORT = 1300;
// const myModule=require('./code03.js');


const server = http.createServer((request, response) => {
    var c = 4;
    var y = 6;
    
    var z = sum(c,y);
    
    response.write(`Sum of ${c} and ${y} is ${z}`);
    response.end();
});

server.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});

function sum(c, y) {
  return c + y;
}
