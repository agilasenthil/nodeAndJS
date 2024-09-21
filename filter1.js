const countries = ["France", "South Africa", "Brazil", "United States", "Sweden"];

const countriesFinal = countries.filter((c) => {
    if(c.includes(" ")) return true;
    return false;
})

console.log(countriesFinal);