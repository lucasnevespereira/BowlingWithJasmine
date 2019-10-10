// En vue d'avoir défini nos tests dans BowlingGameSpec.js , on doit définir plusieur notions dans notre code.

// L'idée d'un  BowlingGame 
// Une fonction pour lancer la balle, ex:  roll  ou  rollMany 
// La notion de  game 
// La notion de  score 

let BowlingGame = function(){

    this.rolls = [];
    this.currentRoll = 0;
};

// BowlingGame a besoin d'une fonction roll qui définit l'action de lancer la balle
// prototype en javascript permet surcharger les propriétes d'un objet.

BowlingGame.prototype.roll = function(pins){
    
    this.rolls[this.currentRoll++] = pins;
}

BowlingGame.prototype.score = function() {

    let score = 0;
    let frameIndex = 0;
    let self = this;

    function sumOfBallsInFrame(){
        return self.rolls[frameIndex] + self.rolls[frameIndex + 1];
    }

    for (let frame = 0; frame < 10; frame++) {
        score += sumOfBallsInFrame();
        frameIndex += 2;
    }

    return score;
}