//mordern java script
// const arrowsum = (a,b)=>{ //arrow sum is a funtion stored as variable
//     console.log(a+b);// arrrow funtion
// };

// const arrowMul= (x,y)=>{
//     console.log(x*y);
// };

//to find the no of vowels in a string

function countVowels(str) {
  let count = 0;
  for (const char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}  

countVowels(abc);
