const square = (num) => {
    return (num**2);
}

const sumOfSquares = (num1, num2) => {
    return (square(num1) + square(num2)); 
}

const answer = sumOfSquares(2,3);
const answer1 = sumOfSquares(3,4);
console.log(answer, answer1);