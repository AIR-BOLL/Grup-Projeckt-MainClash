import Phaser from "phaser";

export default class HubScene extends Phaser.Scene {
  constructor() {
    super("HubScene");
  }

  create() {
    this.add.text(100, 50, "Choose Room", {
      fontSize: "32px",
      color: "#ffffff",
    });

    // Math Room
    this.add.text(100, 150, "Math Room", {
      fontSize: "28px",
      color: "#00ff00",
      backgroundColor: "#222222",
      padding: { x: 10, y: 5 },
    })
    .setInteractive()
    .on("pointerdown", () => this.scene.start("MathScene"));

    // Physics Room
    this.add.text(100, 250, "Physics Room", {
      fontSize: "28px",
      color: "#00ffff",
      backgroundColor: "#222222",
      padding: { x: 10, y: 5 },
    })
    .setInteractive()
    .on("pointerdown", () => this.scene.start("PhysicsScene"));

    // Win Room (тест)
    this.add.text(100, 350, "Win Screen", {
      fontSize: "28px",
      color: "#ff00ff",
      backgroundColor: "#222222",
      padding: { x: 10, y: 5 },
    })
    .setInteractive()
    .on("pointerdown", () => this.scene.start("WinScene"));
  }
}