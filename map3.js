const items = ["light", "banana", "phone", "book", "mouse"];


const plurals = items.map((item) => {
    return `${item}` + 's';
});


console.log(plurals);