class Board {
    constructor(length)
    {
        this.length = length || 100;
        this.snakeLegend = new Map();
        this.ladderLegend = new Map();
    }

    getSize(){ return this.length };

    addSnake = (start, end) => {
        this.snakeLegend.set(start, end);
    }

    addLadder(start, end) {
        this.ladderLegend.set(start, end);
    }

    finalizePosition(initialPosition, start) {
        const positionHistory = [initialPosition];
        if(start > this.length)
        {
            return [...positionHistory, initialPosition];
        }
        let currentPosition = start;
        do
        {
            positionHistory.push(currentPosition);
            if(this.snakeLegend.get(currentPosition))
                currentPosition = this.snakeLegend.get(currentPosition);
            else if(this.ladderLegend.get(currentPosition))
                currentPosition = this.ladderLegend.get(currentPosition);
            else break;
        }while(true);
        return positionHistory;
    }
}

module.exports = Board;