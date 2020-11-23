const Player = require('../models/player');
const Board = require('../models/board');
const DiceRollService = require('./diceRollService');

class snakeAndLadderService {
    constructor(boardSize = 100)
    {
        this.board = new Board(boardSize);
        this.players = [];
        this.numberOfDices = 1;
        this.playersNeededToWin = 1;
    }

    addSnake = (start, end) => {
        this.board.addSnake(start,end);
    }

    addLadder(start, end) {
        this.board.addLadder(start,end);
    }

    addPlayer(playerName)
    {
        const newPlayer = new Player(playerName);
        this.players.push(newPlayer);
    }

    setPlayersNeededToWin(playersNeededToWin){
        this.playersNeededToWin = playersNeededToWin;
    }

    setNumberofdice(number = 1)
    {
        this.numberOfDices = number;
    }

    startGame()
    {
        let playersWon = 0;
        let gameOver = 0;
        if(this.players.length <2)
        {
            console.log("Minimum 2 players needed to start the game");
            return;
        }
        let activePlayers = this.players.slice(0);
        do
        {

            for(let i=0;i<activePlayers.length;i++)
            {
                const activePlayer = activePlayers[i];
                // console.log(activePlayers, activePlayer, activePlayer.getPosition());
                const diceRolls = [];
                for(let i=0;i<this.numberOfDices;i++)
                    diceRolls.push(DiceRollService.getDiceNumber());
                const totalNumber = diceRolls.reduce((sum, val) => sum+val);
                const initialPosition = activePlayer.getPosition();
                const positionHistory = this.board.finalizePosition(initialPosition, initialPosition + totalNumber);
                const finalPosition = positionHistory[positionHistory.length-1];
                activePlayer.setPosition(finalPosition);
                console.log(`${activePlayer.getName()} rolled a ${diceRolls} and moved from ${initialPosition} to ${finalPosition} (${positionHistory.join(' -> ')})`);
                if(finalPosition === this.board.getSize())
                {
                    playersWon++;
                    activePlayer.hasWon();
                    console.log(`Congratulations ${activePlayer.getName()}, You have won the game`);
                    activePlayers.splice(i,1);
                    if(playersWon === this.playersNeededToWin)
                    {
                        gameOver = 1;
                        break;
                    }
                }
            }
            // break;
            if(gameOver)
            {
                console.log("Game is Over");
                break;
            }
        }while(true);
    }
};

module.exports = snakeAndLadderService;