const snakeAndLadderService = require('./services/snakeAndLadderService');

const snakeAndLadderServiceInstance = new snakeAndLadderService(100);

snakeAndLadderServiceInstance.addPlayer('Apoorv');
// snakeAndLadderServiceInstance.addPlayer('Pallavi');
snakeAndLadderServiceInstance.addPlayer('Arjun');
snakeAndLadderServiceInstance.addPlayer('Arpit');

snakeAndLadderServiceInstance.setPlayersNeededToWin(1);

snakeAndLadderServiceInstance.setNumberofdice(3);

snakeAndLadderServiceInstance.addSnake(62, 5)
snakeAndLadderServiceInstance.addSnake(33, 6)
snakeAndLadderServiceInstance.addSnake(49, 9)
snakeAndLadderServiceInstance.addSnake(88, 16)
snakeAndLadderServiceInstance.addSnake(41, 20)
snakeAndLadderServiceInstance.addSnake(56, 53)
snakeAndLadderServiceInstance.addSnake(98, 64)
snakeAndLadderServiceInstance.addSnake(93, 73)
snakeAndLadderServiceInstance.addSnake(95, 75);

snakeAndLadderServiceInstance.addLadder(2, 37);
snakeAndLadderServiceInstance.addLadder(27, 46);
snakeAndLadderServiceInstance.addLadder(10, 32);
snakeAndLadderServiceInstance.addLadder(51, 68);
snakeAndLadderServiceInstance.addLadder(61, 79);
snakeAndLadderServiceInstance.addLadder(65, 84);
snakeAndLadderServiceInstance.addLadder(71, 91);
snakeAndLadderServiceInstance.addLadder(81, 98);

snakeAndLadderServiceInstance.startGame();