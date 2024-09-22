const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const mySet = new Set();
for(let i=0;i<numbers.length;i++){
    if(mySet.has(numbers[i])){
        console.log(numbers[i]);
        break;
    }
    mySet.add(numbers[i]);
}

