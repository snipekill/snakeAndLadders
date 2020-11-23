const readline = require("readline");

class InputService {
    constructor()
    {
        this.inputInterface = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    async takeInput()
}