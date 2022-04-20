// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        // add object to existing scene
        scene.add.existing(this);
 
        this.isFiring = false;
        this.moveSpeed = 2;
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }

    update() {
        mouse.on
    // pointer movement
        "pointermove", (pointer) => {
            if(!this.isFiring)
            {this.x = Phaser.Math.Clamp(pointer.x, 47, 578);}
            };
        
    // firing    
        if(mouse.activePointer.leftButtonDown() && !this.isFiring) {
            { 
                this. isFiring = true;
                this.sfxRocket.play();
            }
        if(this.isFiring && this.y >= 108) this.y -=2;  // move up
        if(this.y <= 108);}                               // reset on miss}
            {
                this.isFiring = false;
                this.y = 431;
            }
    }
    
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}