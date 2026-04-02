import { useEffect, useRef } from "react";
import Phaser from "phaser";
import HubScene from "./scenes/HubScene";
import MathScene from "./scenes/MathScene";
import PhysicsScene from "./scenes/PhysicsScene";
import WinScene from "./scenes/WinScene";

export default function Game() {
  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      parent: gameRef.current,
      width: window.innerWidth,
      height: window.innerHeight,
      scene: [HubScene, MathScene, PhysicsScene, WinScene],
      physics: { default: "arcade" },
      scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
      },
      backgroundColor: "#222222", // чтобы точно видно было текст
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    };
  }, []);

  return <div ref={gameRef} style={{ width: "100vw", height: "100vh" }} />;
}