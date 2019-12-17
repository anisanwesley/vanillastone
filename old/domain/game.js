function Game(playerA, playerB) {
    Log.create("Game")
    var root = this;
    var playerTime = null;

    //Construtor
    this.playerA = playerA;
    this.playerB = playerB;

    this.playerA.side = 'A';
    this.playerB.side = 'B';

    this.playerA.game = this.playerB.game = this;

    this.battlefield = new Battlefield();
    this.graveyard = [];

    start = function() {
        Log.trace('start');
        if(this.started) return; 

        playerTime = 'A';
        
        this.playerB.hand.push(this.playerB.deck.pop())
        this.playerB.hand.push(Card.Create('GAME_005'));

        Log.event('start match')
        
        return this.turn();
    }

    turn = function(){
        console.clear();
        Log.trace('turn');
        if(this.started){
            playerTime =  playerTime === 'A' ? 'B' : 'A';
        }
        var player = currentPlayer();
        player.startTurn();

        this.started = true;
        return new GameResult(player);
    }

    playCard = function(cardId, target){
        Log.trace('playCard', arguments);
        var player = currentPlayer();
        var card = Query.find(player.hand, 'matchId', cardId);
        if(card.displayCost > player.currentMana){
            Log.error("Sem nama suficiente");
            return;
        }
        player.spendMana(card.displayCost);

        Log.event('play card');
        switch(card.type.toLowerCase()){
            case 'minion':
                swap(player.hand, this.battlefield[playerTime], card);
                Log.event('summon');
            break;
            case 'spell':

            break;
        }
        return new GameResult(player);
    }

    swap = function(from, to, item) {
        Log.trace('swap', arguments);
        Log.todo('validar se item existe')
        to.push(from.splice(item,1)[0]);
    }

    currentPlayer = function(){
        return playerTime === 'A' ? this.playerA : this.playerB;
    }

    this.start = start;
    this.turn = turn;
    this.playCard = playCard;
    this.currentPlayer = currentPlayer;
    this.started = false;

    //privados
    function GameResult(player){
        var availableActions = ['turn'];
        this.playerTime = playerTime;
        this.player = player;
        this.mana = player.currentMana;
        var cardsToPlay = Query.cardsToPlay(player.hand, player.totalMana);
        
        for (var card of cardsToPlay) {
            if(card.displayCost <= player.currentMana){
                availableActions.push('playCard');
            }
            break;
        }
        
        this.availableActions = availableActions.toString();
        var properties = ['matchId','name', 'displayCost', 'displayAttack', 'displayHealth'];
        
        Log.table(root.battlefield[playerTime === 'A' ? 'B': 'A'], properties, "Lacaios do seu oponente:");
        Log.table(root.battlefield[playerTime], properties, "Seus lacaios:");
        Log.table(player.hand, properties, "Sua mão:");
    }
}


