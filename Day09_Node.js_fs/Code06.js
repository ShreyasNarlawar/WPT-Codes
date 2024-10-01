const l = require('fs');

l.unlink("myfile1.txt",(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("file is deleted");
    }
})