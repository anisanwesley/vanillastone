

function Player(hero, heroPower, deck){
    // Reverse navigation
    Log.todo('validar se card é da classe');
    
    this.side = null;
    this.game = null;
    var p = this;

    this.heroPower = Card.Create(heroPower),
    this.hero = Card.Create(hero);
    var buildingDeck = this.deck = [];
    deck.sort(function() {
        return .5 - Math.random();
      })
      .forEach(function(c){
        var card = Card.Create(c);
        card.player = p;
        buildingDeck.push(card);
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

    spendMana = function(mana){
        Log.trace('spendMana', arguments);
        if(mana > this.currentMana){
            Log.error('Não foi possível descontar mana');
        }
        this.currentMana -= mana;
    }

    startTurn = function() {
        Log.trace('startTurn');
        if(this.totalMana < 10){
            this.totalMana++;
        }
        this.currentMana = this.totalMana - this.lockedMana;
        this.lockedMana = this.lockedManaNextTurn;
        this.lockedManaNextTurn = 0;

        this.pickCard();

        for(var card of this.hand){
            card.canPlay = card.displayCost <= this.currentMana;
        }
    }

    pickCard = function(){
        Log.trace('pickCard');

        if(this.deck.length === 0){
            Log.todo('fadigue');
        } else if(this.hand.length === 10){
            Log.todo('mão cheia');
        } else {
        this.hand.push(this.deck.pop());
        }
    }

    this.startTurn = startTurn;
    this.pickCard = pickCard;
    this.spendMana = spendMana;
}
