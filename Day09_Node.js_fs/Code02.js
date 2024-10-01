const fs = require('fs');
fs.writeFile('myfile.txt','Welcome : Mr.Shreyas Narlawar',(error)=>{

    if(error)
        console.log(error);
    else
        console.log("File Updated and Saved Successfully.")
});