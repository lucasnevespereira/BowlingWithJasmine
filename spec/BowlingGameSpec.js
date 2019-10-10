describe("BowlingGame", function(){
    //test pour le jeu de bowling

    // Il faut créer un nouveau game à chaque test sinon tous les résultats seront combinés
    // On va donc créer un nouveau BowlingGame à chaque test et l'assigner à notre variable game.

    let game;

    // Dans Jasmine,  beforeEach est une fonction global est appelée une fois avant chaque spec dans le bloc describe associé.
    beforeEach(function(){
        game = new BowlingGame();
    });

    function roll(n, pins) {
        for(let i = 0; i < n; i++){
            game.roll(pins)
        }
    }

    it("should properly calculate a gutter game", function(){
        //test quand le joueur ne touche aucunne quille
        // Le jouer a eu 20 lancers et a touché 0 quilles à chaque frame donc on attend que son score soit de 0.
        roll(20, 0);
        expect(game.score()).toEqual(0);
    });

    it("should properly calculate a strike", function(){
        //test quand le joeur fait un strike
        // Le jouer a eu 10 lancers et a touché 10 quilles à chaque frame avec 1 lancer donc on attend que son résultat ne soit pas inférieur à 100.
        roll(10, 10);
        expect(game.score()).not.toBeLessThan(100);
    });

    it("should properly calculate a spare", function(){
        //test quand le joeur fait un spare
        // Le jouer a eu 20 lancers et a touché 10 quilles a chaque frame lancer donc on attend que son score soit de 200.
        roll(20, 10);
        expect(game.score()).toEqual(200);
    });
})