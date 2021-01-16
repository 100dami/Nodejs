var testFloder = "./ex01/data";
var fs = require("fs");

fs.readdir(testFloder, function(error,filelist){
    console.log(filelist);
})