console.log("Finding Min or Max in a js Array");

const someArray=[1,2,3,4,5];
console.log(someArray);
const minValue=someArray.reduce((prev,currentVal)=>{
    return prev<currentVal?prev:currentVal;
})

console.log("minValue",minValue);

const maxValue=someArray.reduce((prev,currentVal)=>prev>currentVal?prev:currentVal)

console.log("maxValue",maxValue);