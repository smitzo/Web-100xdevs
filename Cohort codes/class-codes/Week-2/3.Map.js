// given an array [1,2,3,4] give me back a new array in whic every value is multiplied by 2 i.e [2,4,6,8]
const inputArr=[1,2,3,4];

// -------------NORMAL WAY--------------
//const outputArr
// for (let i=0;i<inputArr.length;i++){
//     outputArr[i].push(inputArr[i]*2);
// }
// console.log(outputArr);

//-----------------MAP------------------------

function multiplierFunction(i){
    return i*2;
}

const outputArr= inputArray.map(inputArr , multiplierFunction);
console.log(outputArr);