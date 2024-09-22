let multiple = 5;
const arrays = [];
for(let i = 10; i<=15; i++){
    arrays.push(i);
}

for(let i=0;i<arrays.length;i++){
    const result = multiple*arrays[i];
    console.log(`${arrays[i]} x ${multiple} = ${result}`);
}

