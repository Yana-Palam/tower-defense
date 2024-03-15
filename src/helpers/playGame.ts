import { Enemy } from "../types";

export const playGame = (enemies: Enemy[], towerRange: number) => {
  let remainingEnemies = JSON.parse(JSON.stringify(enemies)) as Enemy[];
  let currentTurn = 0;

  while (remainingEnemies.length > 0) {
    currentTurn++;

    const enemiesShot: Enemy[] = [];

    remainingEnemies.forEach((enemy, index) => {
      if (enemy.distance <= towerRange) {
        enemiesShot.push({ ...enemy });
      }
    });

    let killedEnemy: Enemy;

    if (enemiesShot.length >= 1) {
      enemiesShot.sort((a, b) => a.distance / a.speed - b.distance / b.speed);
      const indexKilledEnemy = remainingEnemies.findIndex(
        (enemy) => enemy.name === enemiesShot[0].name
      );
      killedEnemy = remainingEnemies.splice(indexKilledEnemy, 1)[0];
      console.log(`Turn ${currentTurn}:`);
      console.log(`Kill ${killedEnemy.name} at ${killedEnemy.distance}m`);
    }

    remainingEnemies.forEach((enemy) => (enemy.distance -= enemy.speed));

    if (remainingEnemies.some((enemy) => enemy.distance <= 0)) {
      console.log("Tower LOSES");
      const minTowerRange = enemies.reduce(
        (min, enemy) => Math.min(min, enemy.distance),
        Infinity
      );
      console.log(`Minimal firing range to WIN: ${minTowerRange}m`);

      return { outcome: "LOSE", turns: currentTurn };
    }
  }

  console.log(`Tower WIN in ${currentTurn} turn(s)`);
  return { outcome: "WIN", turns: currentTurn };
};
