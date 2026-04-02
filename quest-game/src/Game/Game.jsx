import { useEffect, useRef } from "react";
import Phaser from "phaser";
import HubScene from "./scenes/HubScene";
import MathScene from "./scenes/MathScene";


export default function Game() {
  const gameRef = useRef(null);

  useEffect(() => {
    const config = {
      type: Phaser.AUTO,
      width: "100%",
      height: "100%",
      parent: gameRef.current,
      scene: [HubScene, MathScene],
      physics: {
        default: "arcade",
      },
    };

    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true); 
    };
  }, []);

  return <div ref={gameRef} />;

}
