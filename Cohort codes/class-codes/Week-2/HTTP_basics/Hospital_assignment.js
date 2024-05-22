// Suppose you have a website kidneyHospital.com
// GET: user can chesk how many kidneys they have;
//POST: user can add a new kidney
//PUT: User can replace a kidney,make it healthy
//DELETE: user can remove an unhealthy kidney


const express = require('express');
const app = express();
const port = 8000;
app.use(express.json())   //json body parser (without this we wont be able to do POST in JSON format)
const users = [{ name: 'smit', kidneys: [{ healthy: false }] }];  // array of objects (global)
//anytime i re-run this code, the users array will get re initialised from scratch . That's why we need databawses to store data rather than storing in local memory
app.get("/", (req, res) => {
    const johnKidneys = users[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    console.log('hello');
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            numberOfHealthyKidneys += 1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys, numberOfHealthyKidneys, numberOfUnhealthyKidneys
    })
})

app.post("/",(req,res)=>{
    const isHealthy=req.body.isHealthy;         //value of isHealthy (const variable) comes from the request body, if i pass it true,
    users[0].kidneys.push({                    // it'll increase num of healthy kidneys
        healthy:isHealthy                     // if isHealthy(const variable) is true, healthy(boolean) will store true
    }) 
    res.json({
        msg:"done"
    })
});
// now we have pushed(updated) the value . if users refreshes and GETs he ll get the updated value
// now go to postman select POST  http://localhost:3000/ then in Body choose raw and JSON and write {"isHealthy":true}
// if i POST 5 times , there will be addition of kidneys 5 times and the number of healthy and unhealthy kidneys will also get updated


app.put("/",(req,res)=>{
    for (let i=0;i<kidneys.length;i++){
        users[i].kidneys[i].healthy=true;
    }
    res.json({});  
          
})

//removing all the unhealthy kidneys
app.delete("/",(req,res)=>{
    const newKidneys=[];
    for (let i=0;i<users[0].kidneys.length;i++){
        if (users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys=newKidneys;
    res.json({msg:"done"})
})
// if i go to postman and send a delete request, the task will be done

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});