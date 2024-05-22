//Write a function named greetUser that takes a user's name and a callback function as parameters. 
//The callback function should be invoked with a greeting message that includes the user's name. 
//Call the greetUser function with a name and a callback function that prints the greeting and store it in a list.

function greetUser(name,callbackfunc){

    console.log("hello "+ name)
    callbackfunc(name)
}

const userlist=[]
function listMaintainer(name){
    userlist.push(name)

}
greetUser("smit",listMaintainer)
greetUser("jay",listMaintainer)
console.log(userlist)