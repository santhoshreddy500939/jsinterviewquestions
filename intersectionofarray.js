console.log("Intersection of Arrays ")

const a=[1,2,3,4];

const b=[3,4,5,6];

function intersectionArray()
{
  const intersectionArrayValues=  a.filter((val)=>b.includes(val));
  return intersectionArrayValues
}

console.log(intersectionArray())