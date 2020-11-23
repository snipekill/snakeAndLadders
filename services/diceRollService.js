class DiceRollService {
    getDiceNumber()
    {
        // return 5;
        return Math.ceil(Math.random()*10)%6 + 1;
    }
}

module.exports = new DiceRollService();