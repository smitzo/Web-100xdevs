function myOwnSetTimeout(duration){
    let p =new promise(function(resolve){
        setTimeout(resolve,1000);               //after 1 second, call resolve
    });
    return p;
}
myOwnSetTimeout(1000)
.then(function(){
    console.log("log the first thing")
});