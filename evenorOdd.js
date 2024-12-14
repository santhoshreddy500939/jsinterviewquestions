console.log("Check whether a Number is Even Or Odd");

const someNumbers=[1,2,3,4,5]
const EvenNumbers=[];
const OddNumbers=[];


someNumbers.forEach((val)=>{
    if(val%2==0)
    {
        EvenNumbers.push(val)
    }
    else
    {
        OddNumbers.push(val)
    }
})

console.log("EvenNumbers",EvenNumbers)
console.log("OddNumbers",OddNumbers)

const sumOfAllNumbers=someNumbers.reduce((total,val)=>
{
    return total=total+val;
})

console.log("sumOfAllNumbers",sumOfAllNumbers)