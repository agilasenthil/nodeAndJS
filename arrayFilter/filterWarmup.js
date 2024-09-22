const practice = [];

for(let i=10;i<=20;i++){
    practice.push(i);
}

const evenNumbers = practice.filter((p) => {
    if(p%2===0) return true;
    return false;
});

console.log(evenNumbers);