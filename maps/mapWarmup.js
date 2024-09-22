const mexico = new Map();

mexico.set("id", 24);
mexico.set("name", "Mexico");
mexico.set("capital", "Mexico City");
mexico.set("neighbours", ["USA", "belize"]);

console.log(mexico);

mexico.set("id", 25);
mexico.get("neighbours").push("Hound");

console.log(mexico);