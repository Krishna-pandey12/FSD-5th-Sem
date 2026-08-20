const arr=[1,2,3,4,5,6,7,8,9,10];
const multiple=arr.map((data)=>data*3);
console.log(multiple);

const divisible=arr.filter((multiple)=>multiple%3==0)
console.log(divisible)

const firstDivisbleOfThree=arr.find((divisible)=>divisible%3==0)
console.log(firstDivisbleOfThree);

const sumOfArr=arr.reduce((data,acc)=>{
  acc+=data
  return acc;
},0);
console.log(sumOfArr);