console.log("Second Largest Number In Array");
// steps:
// 1.Find First Largest Value using Math.max
// 2.Find the index of the First Largest Value
// 3.Remove that from array using splice
// 4.Now, again find largest value using Math.max

const someArray=[1,2,3,4,5];



const findSecondLargestValue=(arr)=>{
    const LargestNumber=Math.max(...arr)
    const LargestNumberIndexOf=arr.indexOf(LargestNumber)
    arr.splice(LargestNumberIndexOf,1)
    console.log(arr)
    return Math.max(...arr)

}


console.log(findSecondLargestValue(someArray))