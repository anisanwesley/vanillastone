function Game(playerA, playerB) {
    Log.create("Game")
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
        Log.trace('turn');
        var player = currentPlayer();
        player.startTurn();

        if(this.started){
            playerTime =  playerTime === 'A' ? 'B' : 'A';
        }
        this.started = true;
        return new GameResult(player);
    }

    playCard = function(cardId, target){
        debugger;
        Log.trace('playCard', arguments);
        var player = currentPlayer();
        var card = Query.find(player.hand, 'matchId', cardId);
        if(card.displayCost > player.currentMana){
            Log.error("Sem nama suficiente");
            return;
        }
        player.spendMana(card.displayCost);

        Log.event('play card');
        switch(card.type){
            case 'minion':

            break;
            case 'spell':

            break;
        }
        return new GameResult(player);
    }

    currentPlayer = function(){
        return playerTime === 'A' ? this.playerA : playerB;
    }

    this.start = start;
    this.turn = turn;
    this.playCard = playCard;
    this.currentPlayer = currentPlayer;
    this.started = false;

    //privados
    function GameResult(player){
        this.playerTime = playerTime;
        var availableActions = ['turn'];
        this.player = player;
        this.mana = player.currentMana;
        var cardsToPlay = Query.cardsToPlay(player.hand, player.totalMana);
        
        if(cardsToPlay.length > 0) availableActions.push('playCard');
        
        this.availableActions = availableActions.toString();
    }
}


