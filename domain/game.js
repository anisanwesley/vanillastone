function Game(playerA, playerB) {
    var g = this;
    var playerTime = null;

    //Construtor
    this.playerA = playerA;
    this.playerB = playerB;

    this.playerA.side = 'A';
    this.playerB.side = 'B';

    this.battlefield = new Battlefield();
    this.graveyard = [];

    start = function() {
        if(this.started) return;

        playerTime = 'A';
        
        this.playerB.hand.push(this.playerB.deck.pop())
        this.playerB.hand.push(Card.Instantiate('GAME_005'));

        console.log('Event:: Start match');
        
        this.started = true;
        return this.turn();
    }

    turn = function(){

        var player = currentPlayer();
        player.startTurn();

        playerTime =  playerTime === 'A' ? 'B' : 'A';
        return new GameResult(player);
    }

    playCard = function(cardId, target){

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
        this.availableActions = ['turn'];
        var cardsToPlayTemp = Query.cardsToPlay(player.hand, player.totalMana);
        this.cardsToPlay = [];

        var currentPlayer = g.currentPlayer();
        this.mana = currentPlayer.currentMana;

        for(var c of cardsToPlayTemp){
            this.cardsToPlay.push(c.display());
        }

        if(this.cardsToPlay.length > 0) this.availableActions.push('playCard');
        
    }
}


