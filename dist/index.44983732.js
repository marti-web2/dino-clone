const player = document.getElementById("player");
const block = document.getElementById("block");
let counter = 0;
const jump = ()=>{
    if (player.classList == "animate") return;
    player.classList.add("animate");
    setTimeout(function() {
        player.classList.remove("animate");
    }, 300);
};
const checkDead = setInterval(()=>{
    let playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > -20 && playerTop >= 130) {
        block.style.animation = "none";
        alert("Game Over. score: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 1s infinite linear";
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);
document.addEventListener("click", jump);
document.addEventListener("keyup", (e)=>{
    if (e.code === "Space") jump();
});

//# sourceMappingURL=index.44983732.js.map
