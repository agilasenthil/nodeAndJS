const banana = {
    "name" : "banana",
    "quantity" : 1,
    "price" : 1.95
}
const apple = {
    "name" : "apple",
    "quantity" : 1,
    "price" : 1.95
}
const candy = {
    "name" : "candy",
    "quantity" : 1,
    "price" : 1.95
}

const store = new Map();

store.set("storeNumber", 5);
store.set("locationCity", "Milan");
store.set("locationCountry", "Italy");
store.set("products", [banana, apple, candy]);

console.log(store);

console.log(store.get("products"));

console.log(store.get("products")[2]);

store.get("products")[0].price = 1.75;

console.log(banana);

