const fs =require('fs');

function putCopyRightToFile(callbackFunc){
    fs.readFile("a.txt","utf-8",function(err,data){
        data=data+"copyrights by smit 2023";
        fs.writeFile("a.txt",fucntion(){
            callbackFunc();
        });

    });
}

putCopyRightToFile(function(){
    console.log("copyright has been put")
})