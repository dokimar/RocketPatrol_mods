let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [Menu1, Menu2, OnePlayer, TwoPlayer]
}

//reserve keyboard vars
let keyUP, keyDOWN, keyLEFT, keyRIGHT, keyE, keyS, keyF, keyR;

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve highscore
let high_Score = 0;