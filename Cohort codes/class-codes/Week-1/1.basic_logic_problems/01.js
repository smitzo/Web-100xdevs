//Wap to find name of persons who are female in an array of complex objects.
var users= [
    {
    name:"Smit" ,
    age:20, 
    gender:"male"
    },
    {
        name:"shivam",
        age:25,
        gender:"male"
    },
    {
        name:"rusvi",
        age:"25",
        gender:"female"
    }

]

for (let i=0; i<users.length;i++){
    if (users[i]["gender"]=="female"){
        console.log(users[i]["name"]+" is female")
    }
}