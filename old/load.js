((function(){
    //Upgrade array to object
    for(var card of cards){
        cards[card.cardId] = new Card(card);
    }
}))(); 