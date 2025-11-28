
import { player, initPlayer, drawPlayer } from "./player.js";
import { spawnEnemy, enemies,updateEnemies,drawEnemies } from "./enemies.js";
import { handleCollisions } from "./collision.js";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

initPlayer(canvas);
spawnEnemy(canvas);
export const bullets = [];
const BULLET_SPEED = -10;

function tryShoot() {
    const bw = 500;
    const bh = 20;
    bullets.push({
        x: player.x + (player.width - bw) / 2,
        y: player.y - bh,
        width: bw,
        height: bh,
        vy: BULLET_SPEED,
    });
}

function updateScore(){
    const scoreBoard = document.getElementById("scoreBoard");
    scoreBoard.innerText = `Score: ${player.score}`;
    const lifeBoard = document.getElementById("lifeBoard");
    lifeBoard.innerText = `Life: ${player.life}`;
}

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        if (player.x > 10) {
            player.x -= 10;
        }
    } else if (e.key === "ArrowRight") {
        if (player.x < canvas.width - player.width - 10) {
            player.x += 10;
        }
    } else if (e.code === "Space") {
        tryShoot();
    }
});

function update() {
    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        bullet.y += bullet.vy;
        if (bullet.y < 0) {
            bullets.splice(i, 1);
        }
    }
    updateEnemies(canvas);
}

function draw() {
    ctx.fillStyle = "#f797dadc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawPlayer(ctx);

    ctx.fillStyle = "white";
    for (let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    }

drawEnemies(ctx);
spawnEnemy(canvas);
handleCollisions();
updateScore();
}

function gameLoop() {
    update();
    draw();
    requestAnimationFrame(gameLoop);
}

gameLoop();