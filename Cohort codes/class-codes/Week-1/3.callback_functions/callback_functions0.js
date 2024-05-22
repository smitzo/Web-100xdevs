// we use callbacks to follow DRY (dont repeat yourself) function 
//callback function is a generic funciton that is passed as a parameter into another function
function square(n){
    return n*n;
}
function cube(n){
    return n*n*n
}

function sumOfSomething(a,b,callbackfunc){

    return callbackfunc(a)+ callbackfunc(b);
}

console.log("sum of squares is : " + sumOfSomething (5,10,square) )
console.log("sum of cubes is : " + sumOfSomething(5,10,cube) )

/* instead of writing multiple functions like sumofsquares , sumofcubes , sumofquads i create a generic function
or template like function: sumofsomething . This saves many line of code

 function sumofsquares(a,b){
  let square1=square(a)
    let square2=square(b)
    return square1+square2
 }

 function sumofcubes(a,b){
  let square1=cube(a)
    let square2=cube(b)
    return cube1+cube2
 }

*/