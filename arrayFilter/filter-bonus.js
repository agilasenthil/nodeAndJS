const nums = [10,20,30,40,50]
    .map((num) => {
        return num*2;
    }).filter((num) => {
        if(num > 50) return true;
        return false;
    });

console.log(nums);

