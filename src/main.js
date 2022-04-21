// total points: 100
// Marlene Lopez (mlope109@ucsc.edu)

let config = {
    type: Phaser.CANVAS,
    width: 640,
    height: 480,
    // S(hrek) tier: 
    // Implement a simultaneous two-player mode. 
    // In this mode there are two rockets at the same time, 
    // each with its own (key) controls, each capable of independent firing. 
    // (30)
    scene: [Menu1, Menu2, SinglePlayer, TwoPlayer]
}

// reserve keyboard vars
// Track a high score that persists across scenes and display it in the UI
// (5)
// Allow the player to control the Rocket after it's fired 
// (5)

let keyUP, keyDOWN, keyLEFT, keyRIGHT, keyE, keyS, keyF, keyR;
let game = new Phaser.Game(config);

// Redesign the game's artwork, UI, and sound to change its theme/aesthetic 
// (to something other than sci-fi) 
// (60)

// I chose to make it roadkill themed and color coordinated the point system
// display with the color of the car that represents the player
// the goal is to run over as many racoons as possible and the art
// I created for the game is meant to represent a road and cars crashing into
// racoons that in the explosion become casualties as shown with blood
// the sounds are also car sounds like starting the engine, screeching tires,
// and a thud when the body of the animal collides with the car.
// instead of sci-fi it is urban

// set UI sizes
let borderUIsize = game.config.height / 15;
let borderPadding = borderUIsize / 3;
let starSpeed = 1.3;

// reserve for highScore
let high_Score = 0;
