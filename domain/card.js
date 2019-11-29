function Card(card){
    // Reverse navigation
    this.player = null;

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
    this.collectible = card.collectible;

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
    this.auraCost = 0
    this.auraAttack = 0
    this.auraHealth = 0

    //Gameplay Effects
    this.canAttack = false;
    this.isInjuried = false;

}
Card.MatchId = 0;
Card.Create = function(cardId){
    return new Card(cards[cardId])
}
