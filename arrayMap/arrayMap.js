// Only works on Arrays

// The map() method creates a new array populated with the results
// of calling a provided function on every element in the calling array

// It helps us apply a function to each element in the array one at a time and
// we get a copy or a brand new array with the function applied 


const numbers = [5,10,15,20,25];

const timesTen = numbers.map((number) => {
    return number*10;
});

console.log(timesTen);

// If we dont "return" any function would return undefined

