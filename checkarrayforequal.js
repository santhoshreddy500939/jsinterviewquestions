console.log("Check Arrays For Equality");

const a=[1,2,3,4];
const b=[4,3,2,1];

function checkArrayEqual(){
    if((a.length==b.length)&& (a.every((val)=>b.includes(val))))
    {
       console.log("Equal Length") 
    }
console.log(a.every((val)=> b.includes(val)));
    

}
checkArrayEqual()