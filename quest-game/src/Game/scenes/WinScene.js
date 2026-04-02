import Phaser from "phaser";

export default class WinScene extends Phaser.Scene {
  constructor() {
    super("WinScene");
  }

  create() {
    this.add.text(300, 200, "🎉 YOU WIN!", {
      fontSize: "48px",
      color: "#00ff00",
    });

    this.add.text(320, 300, "Play Again", {
      fontSize: "28px",
      color: "#ffffff",
    })
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("MathScene");
      });

    this.add.text(340, 360, "Menu", {
      fontSize: "28px",
      color: "#ffffff",
    })
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("HubScene");
      });
  }
}