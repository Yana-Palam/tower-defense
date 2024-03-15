import { playGame } from "./helpers/playGame";

test("win", () => {
  const enemies = [
    { name: "BotA", distance: 100, speed: 10 },
    { name: "BotB", distance: 50, speed: 20 },
    { name: "BotC", distance: 30, speed: 20 },
  ];
  const towerRange = 50;

  const result = playGame(enemies, towerRange);

  expect(result.outcome).toBe("WIN");
  expect(result.turns).toBe(6);
});

test("lose", () => {
  const enemies = [
    { name: "BotA", distance: 100, speed: 10 },
    { name: "BotB", distance: 30, speed: 20 },
    { name: "BotC", distance: 30, speed: 20 },
  ];
  const towerRange = 10;

  const result = playGame(enemies, towerRange);

  expect(result.outcome).toBe("LOSE");
});
