Query = {
    unflagged: function(){
        return cards.filter(function(c){
            return !c.flagged;
        })
    },
    cardsToPlay: function(queryable, mana){
        return queryable.filter(function(q){
            return q.displayCost <= mana;
        })
    },
    find:function (queryable, prop, value){
        return queryable[queryable.map(function(e){
            return e[prop];
        }).indexOf(value)];
    }
}
