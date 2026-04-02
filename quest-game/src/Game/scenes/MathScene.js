import Phaser from "phaser";

export default class MathScene extends Phaser.Scene {
  constructor() {
    super("MathScene");
  }

  init(data) {
    this.level = data.level || 1;
  }

  create() {
    this.questions = [
      { q: "5 + 3 = ?", answers: [6, 8, 10], correct: 8 },
      { q: "7 - 2 = ?", answers: [3, 5, 6], correct: 5 },
      { q: "4 x 2 = ?", answers: [6, 8, 10], correct: 8 }
    ];

    this.currentQuestion = this.questions[this.level - 1];

    this.add.text(300, 100, this.currentQuestion.q, {
      fontSize: "32px",
      color: "#ffffff",
    });

    this.currentQuestion.answers.forEach((ans, i) => {
      this.add.text(350, 200 + i * 60, ans, { fontSize: "24px" })
        .setInteractive()
        .on("pointerdown", () => {
          if (ans === this.currentQuestion.correct) {
            this.level++;

            if (this.level > this.questions.length) {
              this.scene.start("WinScene"); // ✅ экран победы
            } else {
              this.scene.start("MathScene", { level: this.level });
            }
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