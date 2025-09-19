document.getElementById("txt").innerText="これはゲームです";
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

//fillRect(x座標(横), y座標(縦), 横幅, 縦幅)
//自分のキャラクターに見立てて四角形を作ってみてください
//width="480"height="640"
let x=225;
let y=480;
let y1=0;
let y2=-330;
let x1=100
let x2=300

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        x -= 15; // 左キーで左に移動
    } else if (e.key === "ArrowRight") {
        x += 15; // 右キーで右に移動
    } else if (e.key === "ArrowUp") {
        y -= 15; // 上キーで上に移動
    } else if (e.key === "ArrowDown") {
        y += 15; // 下キーで下に移動
    }
});
function gameLoop(){
ctx.fillStyle="rgba(255, 156, 194, 0.44)";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle="white";
ctx.fillRect(x,y,10,20);

ctx.fillStyle="black";
ctx.fillRect(x1,y1,30,30);
x1+=2
y1+=5;

ctx.fillStyle="black";
ctx.fillRect(x2,y2,30,30);
x2+=2
y2+=7;
if(y1>640){
    y1=0;
    x1=Math.random()*450;
}
if(y2>640){
    y2=-330;
}

requestAnimationFrame(gameLoop);
}

gameLoop();

ctx.fillStyle="black";
ctx.fillRect(x, y,30,30);
y+=10;