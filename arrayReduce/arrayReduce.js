// Have a function and every single element's value is taken 
// and reduced to a single value
// To take the entire sum of the elemenets of the array


// Add all the elements in the array 

const nums = [5,10,15,20,25,30,35]

let sum = 0;
for(let i=0;i<nums.length;i++){
    sum = sum + nums[i];
}

console.log(sum);

// OR Using ArrayReduce

const sum2 = nums.reduce((result, num) => {
    return result + num;
}, 0);

// sum2 - new value contaitning variable
// .reduce -- reduces to a single variable
// Takes two parameters
// result - the value that keeps adding at each stage, similar to sum
// num - for each value of the nums array
// 0 - the initial value of result;
console.log(sum2);



// For Strings

const cities = ["San Jose", "Milpitas", "Seattle", "Tempe"];

const conCatCities = cities.reduce((result, city) => {
    return result + city;
}, "");

console.log(conCatCities);