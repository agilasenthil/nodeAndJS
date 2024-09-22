const numbers = [10, 20, 15, 30, 15, 20, 35, 60, 10];

const myMap = new Map();
for(let i=0;i<numbers.length;i++){
    if(myMap.has(numbers[i])){
        console.log(i, myMap.get(numbers[i]));
        break;
    }
    myMap.set(numbers[i],i);
}
