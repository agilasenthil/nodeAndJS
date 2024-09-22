const points = [55,56,57,58,59,60];

const sum = points.reduce((result, point) => {
    return result + point;
},0);

console.log(sum);