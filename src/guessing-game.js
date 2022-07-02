class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min
        this.max = max
    }

    guess() {
       return this.guessNumber=Math.round(this.min + (this.max - this.min)/2)
    }

    lower() {
       this.max=this.guessNumber
    }

    greater() {
        this.min=this.guessNumber
    }
}

// const game = new GuessingGame();
// game.setRange(0, 4048)
//
// let result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.lower();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.greater();
// result = game.guess();
// game.lower();
// result = game.guess();
// console.log(result)

module.exports = GuessingGame;
