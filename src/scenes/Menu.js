class Menu1 extends Phaser.Scene {
    constructor() {
        super("menuScene1");
    }
  
    preload() {
        // load audio teehee
        this.load.audio('sfx_select', './assets/blip_select.wav');
        this.load.audio('sfx_explosion', './assets/explosion.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }
  
    create() {
  
        // menu text
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#f8f8ff',
            color: '#ff7f50',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
  
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
  
        // show menu text
        menuConfig.fontSize = '46px'
        menuConfig.fontFamily = 'Copperplate'
        menuConfig.color = '#000000';
        menuConfig.backgroundColor = '#00FF00';
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUIsize - borderPadding*4, 'Expel the Monsters', menuConfig).setOrigin(0.5);
        
        menuConfig.fontSize = '28px'
        menuConfig.fontFamily = 'Courier'
        menuConfig.color = '#008000';
        menuConfig.backgroundColor = '#000000';
        this.add.text(game.config.width / 2, game.config.height / 2, 'Use (S)(F) to move & (E) to fire', menuConfig).setOrigin(0.5);
        menuConfig.color = '#ff69b4';
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUIsize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
        menuConfig.color = '#000000';
        menuConfig.backgroundColor = '#ff69b4';
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUIsize * 2 + borderPadding * 2, 'Press ↓ for Two Player Game', menuConfig).setOrigin(0.5);
  
        // display highscore text on menu
        menuConfig.color = '#4b0082';
        menuConfig.backgroundColor = '#9370db';
        this.add.text(borderUIsize + borderPadding * 17, borderUIsize + borderPadding * 2, 'Best: ', menuConfig);
        this.scoreRight = this.add.text(borderUIsize + borderPadding * 34, borderUIsize + borderPadding * 2, high_Score, menuConfig);
    }
  
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 3,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene1');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene1');
        }
  
        if (Phaser.Input.Keyboard.JustDown(keyDOWN)) {
            this.sound.play('sfx_select');
            this.scene.start('menuScene2');
        }
    }
  }
  
  class Menu2 extends Phaser.Scene {
    constructor() {
        super("menuScene2");
    }
  
    preload() {
        // load audio
        this.load.audio('sfx_select', './assets/blip_select.wav');
        this.load.audio('sfx_explosion', './assets/explosion.wav');
        this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }
  
    create() {
  
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#dc143c',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }
  
        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
  
        // show menu text
        menuConfig.fontSize = '46px'
        menuConfig.fontFamily = 'Copperplate'
        menuConfig.color = '#000000';
        menuConfig.backgroundColor = '#00FF00';
        this.add.text(game.config.width / 2, game.config.height / 2 - borderUIsize - borderPadding*4, 'Expel the Monsters', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = '28px'
        menuConfig.fontFamily = 'Courier'
        menuConfig.color = '#008000';
        menuConfig.backgroundColor = '#000000';
        this.add.text(game.config.width / 2, game.config.height / 2, 'P1: Use (S)(F) to move & (E) to fire', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUIsize + borderPadding, 'P2: Use (←)(→) to move & (↑) to fire', menuConfig).setOrigin(0.5);
        menuConfig.color = '#ff69b4';
        this.add.text(game.config.width / 2, game.config.height / 2 + borderUIsize * 2 + borderPadding * 2, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
  
        // display highscore text on menu
        menuConfig.color = '#4b0082';
        menuConfig.backgroundColor = '#9370db';
        this.add.text(borderUIsize + borderPadding * 17, borderUIsize + borderPadding * 2, 'Best: ', menuConfig);
        this.scoreRight = this.add.text(borderUIsize + borderPadding * 34, borderUIsize + borderPadding * 2, high_Score, menuConfig);
    }
  
    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
            // easy mode
            game.settings = {
                spaceshipSpeed: 4,
                gameTimer: 60000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene2');
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
            // hard mode
            game.settings = {
                spaceshipSpeed: 5,
                gameTimer: 45000
            }
            this.sound.play('sfx_select');
            this.scene.start('playScene2');
        }
    }
  }