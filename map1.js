const bools = [true, true, false, true, false, false];

const boolsModified = bools.map((b) => {
    if(b === true){
        return Math.floor(Math.random()*1000);
    }
    else return 0;
});

console.log(boolsModified);