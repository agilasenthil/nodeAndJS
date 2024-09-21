const noRemainder = (number, mod) => {
    if((number%mod) === 0) return true;
    return false;
}

const answer = noRemainder(5,3);
const answer1 = noRemainder(10,5);
console.log(answer, answer1);