const row = [10,20,30,40,50];

const matrix = row.map((r) => {
    let row1 = [];
    row1.push(r);
    return row1;
});

console.log(matrix);
//OR

const matrix = row.map((r) => {
    return [r];
})