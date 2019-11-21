function Card(card){
    //Card values
    this.cardId = card.cardId;
    this.name = card.name;
    this.cardSet = card.cardSet;
    this.type = card.type;
    this.faction = card.faction;
    this.rarity = card.rarity;
    this.text = card.text;
    this.collectible = card.collectible;
    this.playerClass = card.playerClass;

    this.cost = card.cost;
    this.attack = card.attack;
    this.health = card.health;

    //Immutable
    this.owner = null;
    this.matchId = ++Card.MatchId;
    
    //Mutable
    this.displayCost = card.cost;
    this.displayAttack = card.attack;
    this.displayHealth = card.health;

    this.maxHealth = card.health;
    
    //Aura
    this.auraCost = card.cost;
    this.auraAttack = card.attack;
    this.auraHealth = card.health;

    //Effects
    this.isInjuried = false;

    // Methods
    display = function(){
        return `${this.cardId} (${this.cost}) ${this.attack|| ''}/${this.health|| ''} ${this.name} ${this.text || ''}`;
    }

    this.display = display;
}
Card.MatchId = 0;
Card.Instantiate = function(cardId){
    return new Card(cards[cardId])
}
