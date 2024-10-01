console.log("Write Operation Started");
const fs = require('fs');
fs.appendFile('myfile2.txt','Narlawar',(error)=>{
    if(error)
        console.log(error);
    else
    console.log("Data Saved Into File..");
});
console.log("Append Operation Ended.");