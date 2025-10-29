class StartScene extends Phaser.Scene {
  constructor() {
    super({ key: "StartScene" });
  }

  create() {
    console.log("start");
    // Background
    this.speed = 1;
    this.duration = 60;
    // this.scene.start("GameScene");

    this.scaleBg = 2.6;
    this.bg = this.add
      .tileSprite(300, 650, 600 * this.scaleBg, 1300 * this.scaleBg, "bg")
      .setScale(1 / this.scaleBg);

    this.crossBtn = this.add
      .image(50, 50, "ic_cross")
      .setOrigin(0.5)
      .setDepth(10)
      .setScale(0.3)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.tweens.add({
          targets: this.crossBtn,
          scale: 0.26,
          duration: 100,
          ease: "Power1",
          onComplete: () => {
            this.tweens.add({
              targets: this.crossBtn,
              scale: 0.3,
              duration: 100,
              ease: "Power1",
              onComplete: () => {
                // this.pauseMenu();
              },
            });
          },
        });
      });

    this.timerBG = this.add
      .image(20, 100, "timer")
      .setOrigin(0, 0)
      .setScale(0.55);
    this.scoreBG = this.add
      .image(580, 100, "score")
      .setOrigin(1, 0)
      .setScale(0.55);

    this.timerText = this.add
      .text(78, 130, "1:00", {
        fontFamily: "Nunito, sans-serif",
        fontStyle: "bold ",
        fontSize: "25px",
        color: "#ffffff",
      })
      .setOrigin(0.5);

    this.scoreText = this.add
      .text(600 - 150, 130, "0", {
        fontFamily: "Nunito, sans-serif",
        fontStyle: "bold ",
        fontSize: "25px",
        color: "#ffffff",
      })
      .setOrigin(0, 0.5);

    this.player = this.physics.add.sprite(250, 950, "ic_jazi_car");
    this.player.setCollideWorldBounds(true);
    this.player.setScale(0.4).setOrigin(0.5, 0);

    // Play button
    const playButton = this.add
      .image(300, 1150, "startBtn")
      .setInteractive({ useHandCursor: true })
      .setOrigin(0.5)
      .setScale(0.5);

    // Add interactive behavior
    playButton.on("pointerdown", () => {
      // Add a scale bounce tween for press feedback
      this.tweens.add({
        targets: playButton,
        scale: 0.45,
        duration: 100,
        ease: "Power1",
        yoyo: true,
        onComplete: () => {
          console.log("1");
          this.scene.start("GameScene");
        },
      });
    });

    const fx = playButton.postFX.addShine(0.3, 0.1, 0.2);

    // Optional: hover effect for desktop
    playButton.on("pointerover", () => {
      this.tweens.add({
        targets: playButton,
        scale: 0.52,
        duration: 120,
        ease: "Power2",
      });
    });

    playButton.on("pointerout", () => {
      this.tweens.add({
        targets: playButton,
        scale: 0.5,
        duration: 120,
        ease: "Power2",
      });
    });
  }
}

export default StartScene;
