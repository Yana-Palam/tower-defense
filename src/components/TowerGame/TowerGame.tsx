import React, { useState } from "react";
import { playGame } from "../../helpers/playGame";

const TowerGame: React.FC = () => {
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [turns, setTurns] = useState<number>(0);
  const [outcome, setOutcome] = useState<string>("");

  const handleStartGame = () => {
    const { outcome, turns } = playGame(
      [
        { name: "BotA", distance: 100, speed: 10 },
        { name: "BotB", distance: 50, speed: 20 },
        { name: "BotC", distance: 30, speed: 20 },
      ],
      50
    );
    setGameOver(true);
    setTurns(turns);
    setOutcome(outcome);
  };

  return (
    <div>
      <h1>Tower game simulator</h1>
      {!gameOver && (
        <div>
          <button onClick={handleStartGame}>Start game</button>
        </div>
      )}
      {outcome === "WIN" && (
        <div>
          <p>Tower WIN in {turns} turn(s)</p>
        </div>
      )}
      {outcome === "LOSE" && (
        <div>
          <p>Tower LOSE</p>
        </div>
      )}
    </div>
  );
};

export default TowerGame;
