import{ player, initPlayer,drawPlayer} from "./player.js";    
import{ spawnEnemy, enemy,} from "./enemy.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

initPlayer(canvas);
spawnEnemy(canvas);

const bullets = [];
const BULLET_SPEED = -10;

function tryShoot() {
     bullets.push({
        x: player.x,
        y: player.y,
        width: 5,
        height: 5,
        vy: BULLET_SPEED,
     })
    }
        

//fillRect(x座標(横), y座標(縦), 横幅, 縦幅)
//自分のキャラクターに見立てて四角形を作ってみてください
//width="480"height="640"
let y1=0;
let y2=-330;

let tama=0;
window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        player.x -= 10; 
    } else if (e.key === "ArrowRight") {
        player.x += 10;
    } else if (e.code === "Space") {
        tryShoot();
    }
});
function update() {

}

function draw() {
ctx.fillStyle="rgba(225, 156, 194, 0.44)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
drawPlayer(ctx);

for (let i = bullets.length - 1; i >= 0; i--) {
    const bullet = bullets[i];
    bullet.y += bullet.vy;
    // 弾をプレイヤーの真ん中から出す
    bullet.x = player.x + player.width / 2 - bullet.width / 2;
    ctx.fillStyle = "white";
    ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    // Remove bullet if it goes off the top of the canvas
    if (bullet.y + bullet.height < 0) {
        bullets.splice(i, 1);
    }
ctx.fillStyle = "red";
    ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);

    console.log(bullets);
}
if(tama>0){
    ctx.fillStyle="red";
    ctx.fillRect(player.x+10,player.y-tama,10,20);
    tama+=10;
    ctx.fillStyle="black";
    ctx.fillRect(100,y1,30,30);
    y1+=5;
}
ctx.fillStyle="black";
ctx.fillRect(300,y2,30,30);
y2+=7;
if(y1>640){
    y1=0;
}
if(y2>640){
    y2=-330;
}

}

function gameLoop(){
update();
draw(); 


requestAnimationFrame(gameLoop);
}


gameLoop();

