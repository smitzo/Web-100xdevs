function onDone(content){
    console.log(content)
}

const fs= read("fs");
fs.readFile ("abc.txt",onDone)  //async call

console.log ("hi there")

