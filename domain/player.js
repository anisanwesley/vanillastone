/*TODO:
* Validar se cards são da classe
*/

function Player(hero, heroPower, deck){
    this.side = null;

    this.heroPower = Card.Instantiate(heroPower),
    this.hero = Card.Instantiate(hero);
    var buildingDeck = this.deck = [];
    deck.sort(function() {
        return .5 - Math.random();
      })
      .forEach(function(c){
        buildingDeck.push(Card.Instantiate(c));
    });
    this.hand = [
        buildingDeck.pop(),
        buildingDeck.pop(),
        buildingDeck.pop()
    ];

    this.weapon = null;
    this.secrets = [];
    this.quest = null;
    this.health = 30;

    this.totalMana = 0;
    this.currentMana = 0;
    this.lockedMana = 0;
    this.lockedManaNextTurn = 0;


    startTurn = function() {
        console.log('Event:: Start turn');
        if(this.totalMana < 10){
            this.totalMana++;
        }
        this.currentMana = this.totalMana - this.lockedMana;
        this.lockedMana = this.lockedManaNextTurn;
        this.lockedManaNextTurn = 0;

        this.pickCard();
    }

    pickCard = function(){
        console.log('Event:: Pick card');

        if(this.deck.length === 0){
            console.log('Event:: Fadigue');
        } else {
            this.hand.push(this.deck.pop());
        }
    }

    this.startTurn = startTurn;
    this.pickCard = pickCard;
}
