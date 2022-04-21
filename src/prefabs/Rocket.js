// Rocket1 is the prefab for player01
class Rocket1 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        // add object to existing scene
        scene.add.existing(this);

        this.isFiring = false;
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }


    update() {
        // rocket's left or right movement
        if (true) {
            if (keyA.isDown && this.x >= borderUIsize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyD.isDown && this.x <= game.config.width - borderUIsize - this.width) {
                this.x += this.moveSpeed;
            }
        }

        // firing the rocket upward button
        if (Phaser.Input.Keyboard.JustDown(keyW) && !this.isFiring){
            this.isFiring = true;
            this.sfxRocket.play();
        }
        // if fired. shoot up
        if (this.isFiring && this.y >= borderUIsize * 3 + borderPadding){
            this.y -= this.moveSpeed;
        }
        // if you miss, reset
        if (this.y <= borderUIsize * 3 + borderPadding){
            this.reset();
        }
    }

    // reset to ground level
    reset(){
        this.isFiring = false;
        this.y = game.config.height - borderUIsize - borderPadding*2.5;
    }
}

// Rocket2 is the prefab for player02
class Rocket2 extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        // add object to existing scene
        scene.add.existing(this);

        this.isFiring = false;
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }


    update() {
        // rocket's left or right movement
        if (true) {
            if (keyLEFT.isDown && this.x >= borderUIsize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUIsize - this.width) {
                this.x += this.moveSpeed;
            }
        }

        // firing button
        if (Phaser.Input.Keyboard.JustDown(keyUP) && !this.isFiring){
            this.isFiring = true;
            this.sfxRocket.play();
        }
        // if fired. shoot up
        if (this.isFiring && this.y >= borderUIsize * 3 + borderPadding){
            this.y -= this.moveSpeed;
        }
        // if you miss, reset
        if (this.y <= borderUIsize * 3 + borderPadding){
            this.reset();
        }
    }

    // reset rocket to ground level
    reset(){
        this.isFiring = false;
        this.y = game.config.height - borderUIsize - borderPadding*2.5;
    }
}