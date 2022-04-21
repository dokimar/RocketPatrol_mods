// Rocket is the prefab for player
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        // add object to existing scene
        scene.add.existing(this);

        this.isFiring = false;
        this.moveSpeed = game.settings.spaceshipSpeed;
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }


    update() {
        // rocket's movement by mouse
        if (true) {
            if (mouse.isDown && this.x >= borderUIsize + this.width) {
                this.x = mouse.x;
            }
        }

        // firing the rocket upward button
        if(mouse.isDown && !this.isFiring) {
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