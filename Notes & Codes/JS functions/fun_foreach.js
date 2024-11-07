// let arr = ["pune", "mumbai", "delhi"];
// arr.forEach((val) => {
//   console.log(val.toUpperCase);
// });

// For a given array of numbers, print the square of each value using the forEach loop.

// let nums = [1, 2, 3, 4, 5];

// nums.forEach((num) => {
//   console.log(num * num);
// });

// let nums = [67, 52, 39];
// let calsquare = (num) => {
//   console.log(num * num);
// };
// nums.forEach(calsquare);// will print the sqare of numbers.


///// Map method
let nums = [4, 5, 6, 7];

let newArr = nums.map((val) => {
  return val * val;
});

console.log(newArr);


///fileter method

let number=[2,4,5,6,7,11];

let evenArr= number.filter((val)=>{
 return val%2===0;//even value
});

console.log(evenArr);// will give a even number of array


// reduce method

let arr1 =[4,5,6,7,8];
const output= arr.reduce((res,curr)=>{
 reduce= res+curr;// will give a reduced value in array
});
console.log(output);


// Largest number is an array

let arr2= [4,5,6,7,8];

const output1= arr2.reduce((prev,curr){
    return prev>curr? prev:curr;
});

console.log(output1);

let marks= [66,88,,99,93];

const toppers= marks.filter((vale)=>{
return vale>90;
});

console.log(toppers); 
// array of input numbers
let n= prompt("Enter a number");
let arr4=[];
for (let i=1;i<=n; i++){
  arr4[i-1];
}
console.log(arr4);

// By using reduce method add all the number is an array

let arr5= [4,5,6,7,8,5,9];

const sum= arr5.reduce((prevs, current)=>{
    return prevs+current;
});

console.log(sum);

const factorial= arr4.reduce((prev, curr)=>{
    return prev*curr;

});
console.log("factorial=" ,factorial);
