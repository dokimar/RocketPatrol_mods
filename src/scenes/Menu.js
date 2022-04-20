class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }

    preload() {
      // load audio teehee
      this.load.audio('sfx_select', './assets/blip_select.wav');
      this.load.audio('sfx_explosion', './assets/explosion.wav');
      this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
    }

    create() {
      let menuConfig = {
        fontFamily: 'Courier',
        fontSize: '28px',
        backgroundColor: '#F3B141',
        color: '#843605',
        align: 'right',
          padding: {
            top: 5,
            bottom: 5,
          },
        fixedWidth: 0
      }
      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'ROCKET PATROL', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2, 'Use ←→ keys to move and (F) to fire', menuConfig).setOrigin(0.5);
      menuConfig.backgroundColor = '#00FF00';
      menuConfig.color = '#000';
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);

      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      keyDOWN = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);

      // show menu text
      menuConfig.fontSize = '46px'
      // set title
      this.add.text(game.config.width / 2, game.config.height / 2 - borderUIsize -
          borderPadding*4, 'BALLOON POP', menuConfig).setOrigin(0.5);
      menuConfig.fontSize = '28px'
      // set instructions
      this.add.text(game.config.width / 2, game.config.height / 2, 'Use (S)(F) to move (left)(right) & (E) to fire',
          menuConfig).setOrigin(0.5);
      menuConfig.color = '#000';
      // set easy vs hard modes
      this.add.text(game.config.width / 2, game.config.height / 2 + borderUIsize +
          borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
      // set 1 player vs 2 player game
          this.add.text(game.config.width / 2, game.config.height / 2 + borderUIsize * 2 +
          borderPadding * 2, 'Press ↓ for Two Player Game', menuConfig).setOrigin(0.5);
    }

    update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // easy mode
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 60000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // hard mode
        game.settings = {
          spaceshipSpeed: 4,
          gameTimer: 45000    
        }
        this.sound.play('sfx_select');
        this.scene.start('playScene');    
      }
    }
  }