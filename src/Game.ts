import "phaser";
// How to load a JSON:
// https://stackoverflow.com/a/50674344/747872
import * as cfg from "./phaser_game_config.json";


function preload(this: Phaser.Scene) {
    this.load.image('logo', 'assets/logo.png');
}


function create(this: Phaser.Scene) {
    let logo = this.add.image(400, 150, 'logo');
    this.tweens.add({
        targets: logo,
        y: 400,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });
}


let config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: cfg.screen.width,
    height: cfg.screen.height,
    scene: {
        preload: preload,
        create: create
    }
};


let game = new Phaser.Game(config);
