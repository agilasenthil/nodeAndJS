const items = [
    {
        "name" : "banana",
        "quantity" : 1,
        "price" : 1.95
    },
    {
        "name" : "apple",
        "quantity" : 1,
        "price" : 1.45
    },
    {
        "name" : "banana",
        "quantity" : 10,
        "price" : 0.05
    },
    {
        "name" : "candy",
        "quantity" : 1,
        "price" : 3.50
    }
]

const results = [];
const duplicates = new Set();

for(let i=0;i<items.length;i++){
    if(duplicates.has(items[i].name)){
        continue;
    }
    results.push(items[i]);
    duplicates.add(items[i].name);
}

console.log(results);

// To loop thru maps

for(const dups of duplicates){
    console.log(dups);
}

//To loop through pbjects

const stockItem = {
    id: 54,
    price: 1.32,
    name: "apple",
    quantity: 6
}

for(const item of Object.entries(stockItem)){
    console.log(item);
}