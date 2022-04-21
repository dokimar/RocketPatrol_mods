// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue){
        super(scene, x, y, texture, frame, pointValue);
        // add object to existing scene
        scene.add.existing(this);

        this.points = pointValue;
        this.moveSpeed = 2.5;
    }

    update(){
        this.x -= this.moveSpeed;
        
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }

    reset(){
        this.x = game.config.width;
    }
}