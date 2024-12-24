
let a = 5,b=10,c=20;

function printNumber(...rest){  // rest 
   console.log(...rest) // spread
// console.log(a,rest)
}

printNumber(a,b,c)


const z =[56,34,23];
console.log(...z)

const x = [100,200]

const y = [...x,...z];
console.log(...y)
y.map((item)=>{console.log(item)})