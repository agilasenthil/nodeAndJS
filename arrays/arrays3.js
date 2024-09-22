let total = 0;

const grades = [55, 63, 82, 98, 91, 43];

let number = grades.length;


for(let i=0;i<number;i++){
    total = total + grades[i];
}

const result = total/number;
console.log(result);

