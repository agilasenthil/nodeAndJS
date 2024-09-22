const points = [10, 20, 10, 30, 15, 15, 35, 60, 10];

const mySet = new Set();

for(let i=0;i<points.length;i++){
    mySet.add(points[i]);
}


// OR

const mySEt1 = new Set(points); // Both are same
