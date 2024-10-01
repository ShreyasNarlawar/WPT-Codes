const fs = require('fs');
fs.readFile('myfile2.txt',(error,data)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log(data);
        console.log(data.toString());
    }
});