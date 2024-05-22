const express =require('express');  //express library helps us create an http server
const app =express()     //app object is returned by express() function
//console.log(typeof app)
const bodyParser= require('body-parser')
const port = 3000

app.use(bodyParser.json());

app.get('/',function(req,res){
    //console.log(req.headers.authorization)
    res.status(401).send("Hello World!")
})


app.get("/route-handler",function(req,res){
    //headers, query params
    //run machine learning model on input
    res.json({
        name:"smit",
        age: 21
    })
})

app.post("/conversations", (req,res)=>{
    const message=req.body.message;
    console.log(message)
    //do machine learning thing
    res.json({
        output:"2+2=4"
    })

})

//onyl 1 process can be listened at a port at a time
// "listen" starts the http server
app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})
