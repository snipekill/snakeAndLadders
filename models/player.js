class Player {
    constructor(name)
    {
        this.name = name || 'Cibola';
        this.currentPosition = 0;
        this.won = 0;
    }

    setPosition(position){
        this.currentPosition = position;
    }
    hasWon(){
        this.won = 1;
    }
    getPosition(){ return this.currentPosition };

    getName() { return this.name };

}

module.exports = Player;