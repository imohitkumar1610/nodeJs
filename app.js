const fs = require('fs');

fs.readdir('.$/', function(err,files){
    if(err){
        console.log("error occured" , err);
    }else{
        console.log('Resukt is :',files);
    }
});