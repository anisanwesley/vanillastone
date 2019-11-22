Display = {
    hand: function(){
        var currentPlayer = Display.Game.currentPlayer();
        console.table(currentPlayer.hand,[
            'cardId',
            'canPlay',
            'name',
            'displayCost',
            'displayAttack',
            'displayHealth',
            'text'
        ])
    }
}