const s = require("fs");

s.rename("myfile.txt","myfile1.txt",(error)=>{
    if(error){
        console.log(error);
    }
    else{
        console.log("file rename");
    }
})