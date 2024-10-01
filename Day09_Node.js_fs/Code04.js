const dk = require('fs');

dk.open("myfile3.txt",'w',(error,file)=>{
    if(error){
        console.log(error);
    }else{
        console.log("file is created");
        console.log(file);
    }
})