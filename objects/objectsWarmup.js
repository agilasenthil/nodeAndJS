const mexico = {
    "id" :24,
    "name" : "Mexico",
    "capital" : "Mexico city",
    "neighbours" : ["USA", "Guatemala", "Belize"]
}


console.log(mexico);

mexico.id = 25;

mexico.neighbours.push("Honduras");

console.log(mexico);