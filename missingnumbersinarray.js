console.log("Missing Numbers in Array from 1-10");
// steps
// 1.array should be in sorted format
// 2.find min and max largest values
const someArray=[1,2,3,5,6,9,7]

// console.log(someArray.sort())

const findMissingNumbers=(arr)=>{
        const missingElements=[];
        arr.sort()
        const minimumNumber=Math.min(...arr)
        const maximumNumber=Math.max(...arr)
        for(let i=minimumNumber;i<maximumNumber;i++)
        {
            if(arr.indexOf(i)<0)
            {
                missingElements.push(i)
            }
        }
        console.log(missingElements)

        return missingElements;
}
findMissingNumbers(someArray)