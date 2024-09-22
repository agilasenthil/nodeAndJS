const prices = [1.23, 19.99, 85.2, 32.87, 8, 5.2];

const lowPrices = prices.filter((price) => {
    if((1.15*price) < 10) return true;
    return false;
})

console.log(lowPrices);