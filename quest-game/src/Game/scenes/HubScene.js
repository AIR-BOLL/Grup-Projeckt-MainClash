import Phaser from "phaser";

export default class HubScene extends Phaser.Scene {
  constructor() {
    super("HubScene");
  }

  create() {
    this.add.text(300, 50, "Choose Room", {
      fontSize: "32px",
      color: "#ffffff",
    });

    const math = this.add.text(350, 200, "Math Room", { fontSize: "24px" })
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("MathScene");
      });

    const physics = this.add.text(350, 300, "Physics Room", { fontSize: "24px" })
      .setInteractive()
      .on("pointerdown", () => {
        console.log("Go to Physics");
      });

    const chemistry = this.add.text(350, 400, "Chemistry Room", { fontSize: "24px" })
      .setInteractive()
      .on("pointerdown", () => {
        console.log("Go to Chemistry");
      });
  }
}
