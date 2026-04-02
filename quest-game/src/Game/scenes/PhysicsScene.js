import Phaser from 'phaser';

export default class PhysicsScene extends Phaser.Scene {
  constructor() {
    super({ key: 'PhysicsScene' });
  }

  // Получаем данные при старте сцены
  init(data) {
    this.level = data.level || 1;
    this.score = data.score || 0;
    this.lives = data.lives || 3;
  }

  create() {
    // Жизни и очки
    this.livesText = this.add.text(20, 60, "Lives: " + this.lives, {
      fontSize: "24px",
      color: "#ff0000",
    });

    this.scoreText = this.add.text(20, 100, "Score: " + this.score, {
      fontSize: "24px",
      color: "#00ff00",
    });

    // Вопросы по физике
    this.questions = [
      { q: "What is the unit of force?", answers: ["Newton", "Joule", "Watt"], correct: "Newton" },
      { q: "Acceleration due to gravity?", answers: ["9.8 m/s²", "5 m/s²", "20 m/s²"], correct: "9.8 m/s²" },
      { q: "Formula of speed?", answers: ["v = s / t", "v = m * a", "v = t / s"], correct: "v = s / t" }
    ];

    this.currentQuestion = this.questions[this.level - 1];

    this.add.text(300, 150, this.currentQuestion.q, { fontSize: "32px", color: "#ffffff" });

    this.currentQuestion.answers.forEach((ans, i) => {
      this.add.text(300, 250 + i * 60, ans, { fontSize: "28px", color: "#ffff00" })
        .setInteractive()
        .on("pointerdown", () => {
          if (ans === this.currentQuestion.correct) {
            this.score += 10;
            this.level++;

            if (this.level > this.questions.length) {
              this.scene.start("WinScene", { score: this.score });
            } else {
              this.scene.start("PhysicsScene", { level: this.level, score: this.score, lives: this.lives });
            }
          } else {
            this.lives--;
            this.livesText.setText("Lives: " + this.lives);

            if (this.lives <= 0) {
              this.scene.start("GameOverScene");
            }
          }
        });
    });
  }

  update() {
    // В create() после отображения вопросов
this.timeLimit = 15; // 15 секунд
this.timerText = this.add.text(600, 60, "Time: " + this.timeLimit, {
  fontSize: "24px",
  color: "#ffffff",
});

this.timerEvent = this.time.addEvent({
  delay: 1000, // каждую секунду
  callback: () => {
    this.timeLimit--;
    this.timerText.setText("Time: " + this.timeLimit);

    if (this.timeLimit <= 0) {
      this.lives--;
      this.livesText.setText("Lives: " + this.lives);

      if (this.lives <= 0) {
        this.scene.start("GameOverScene");
      } else {
        this.scene.start("PhysicsScene", { level: this.level, score: this.score, lives: this.lives });
      }
    }
  },
  loop: true,
});
    this.levelText = this.add.text(20, 20, "Level: " + this.level, {
  fontSize: "24px",
  color: "#00ffff",
});
  }
}