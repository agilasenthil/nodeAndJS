const nums = [10,30,50,70,90]
.map((num) => {
    return num**2;
}).filter((num) => {
    if(num > 1000) return true;
    return false;
}).reduce((result,num) => {
    return result + num;
},0);

console.log(nums);