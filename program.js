var deckA = [
    'EX1_506a',
    'EX1_025t',
    'skele11',
    'CS2_boar',
    'CS2_168',
    'CS2_tk1',
    'CS2_101t',
    'CS2_050',
    'EX1_506a',
    'EX1_025t',
    'skele11',
    'CS2_boar',
    'CS2_168',
    'CS2_tk1',
    'CS2_101t',
    'CS2_050',
];

var deckB = [
    'CS2_120',
    'CS2_172',
    'CS2_118',
    'CS2_119',
    'CS2_182',
    'CS2_200',
    'CS2_201',
    'CS2_186',
    'CS2_120',
    'CS2_172',
    'CS2_118',
    'CS2_119',
    'CS2_182',
    'CS2_200',
    'CS2_201',
    'CS2_186',
]

var playerA = new Player('HERO_01','CS2_102', deckA);
var playerB = new Player('HERO_02','CS2_102', deckB);

var game = new Game(playerA, playerB);

console.log('min matchId ~> '+ Card.MatchId)

console.log(game.start());

