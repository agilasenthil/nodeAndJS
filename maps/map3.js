const houseForSale = new Map();

houseForSale.set("area", 940);
houseForSale.set("value", 320000);
houseForSale.set("streetName", "Fifth Street");
houseForSale.set("built", 2012);
houseForSale.set("owner", {
    "name" : "Blake",
    "age" : 29
});

houseForSale.set("offers", [290000, 295000, 315000, 312000]);

console.log(houseForSale);
houseForSale.delete("built");
houseForSale.get("owner").age = 30;

const newArray = houseForSale.get("offers").reduce((result,offer) => {
    result = Math.max(result, offer);
    return result;
}, 0);

console.log(newArray);
houseForSale.set("sale price", 312000);

console.log(houseForSale);
