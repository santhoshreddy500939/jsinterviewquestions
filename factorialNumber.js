console.log("Find Factorial Of a Number");

let fact=1;

const factorialOfNumber=(val)=>{
    if(val<0)
    {
        console.log("Factorial Of a Number is Not Possible");
        return 0;
    }

    else{
        for(i=1;i<=val;i++)
        {
            fact=fact*i;
            // console.log(fact)
        }
        return fact;
    }
}
console.log(factorialOfNumber(5))