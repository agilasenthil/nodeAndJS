const myConsole = new Map();

myConsole.set("log", (message) => {
    console.log(message);
})

myConsole.get("log")("Hello World");