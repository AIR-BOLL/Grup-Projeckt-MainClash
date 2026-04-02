import Phaser from "phaser";

export default class MathScene extends Phaser.Scene {
  constructor() {
    super("MathScene");
  }

  create() {
    this.add.text(300, 100, "5 + 3 = ?", {
      fontSize: "32px",
      color: "#ffffff",
    });

    const answers = [6, 8, 10];

    answers.forEach((ans, i) => {
      this.add.text(350, 200 + i * 60, ans, { fontSize: "24px" })
        .setInteractive()
        .on("pointerdown", () => {
          if (ans === 8) {
            alert("Correct!");
          } else {
            alert("Wrong!");
          }
        });
    });

    this.add.text(20, 20, "Back")
      .setInteractive()
      .on("pointerdown", () => {
        this.scene.start("HubScene");
      });
  }
}