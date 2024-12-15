console.log("Find Count of Vowels in a String");

const Vowels=["a","e","i","o","u"];

const checkingString="Simhadri e";
let count=0;
for(eachCharacter of checkingString.toLowerCase())
{

    if(Vowels.includes(eachCharacter))
    {
        count++;
    }


}

console.log("count------",count);