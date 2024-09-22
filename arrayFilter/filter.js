// Only works on arrays
// Filter out based on the condition

const nums = [5,6,7,8,9,10];

// Keep Even numbers in the new Array
// Filter takes two parameters

const evenNumbers = nums.filter((num) => {
    if(num%2 === 0) return true;
    return false;
    //return 100 --> Still the numbers would be present
})

console.log(evenNumbers); //Even though its true or false, it ll print the numbers
// Filter looks for truthy or falsy values
// So even if you return 100, it will print the numbers 

