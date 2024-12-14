console.log("Finding Duplicate Elements in Array")

const DuplicateArray=[1,2,3,1,7];
console.log("DuplicateArray",DuplicateArray)
const DuplicateElementsInArray=DuplicateArray.filter((val,index,array)=>array.indexOf(val)!==index)

console.log("DuplicateElementsInArray",DuplicateElementsInArray)