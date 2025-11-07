export const enemies = [];
const SIZE = 26;
const enemyImage = new Image();
enemyImage.src = "https://th.bing.com/th/id/OIP.m2_HuMnpVQODNHP1Gkw9qQHaEI?w=284&h=180&c=7&r=0&o=7&pid=1.7&rm=3";
function pushEnemies(canvas) {
  const w = SIZE;
  const h = SIZE;
  const x = Math.random() * (canvas.width - w);
  const y = 0;
  const vy = 5

  enemies.push({ x, y, width: w, height: h, vy });
}

export function spawnEnemy(canvas) {
 if (enemies.length < 53) {
    pushEnemies(canvas);
 }
}

export function updateEnemies(canvas) {
  for (let i = enemies.length - 1; i >= 0; i--) {
    const e = enemies[i];
    e.y += e.vy;
    if (e.y > canvas.height) {
      enemies.splice(i, 1);
    }
  }
}

export function drawEnemies(ctx) {
  ctx.fillStyle = "crimson";
  for (const e of enemies) {
    ctx.drawImage(enemyImage,e.x, e.y, e.width, e.height);
  }
}
