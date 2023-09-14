let counterDead = document.getElementById("dead");
let counterLost = document.getElementById("lost");

(function click() {
    for(let i = 1; i < 10; i++) {
        let hole = document.getElementById(`hole${i}`);
        hole.onclick = function() {
            let search = hole.className.includes("hole_has-mole");
            if(search === true) {
                counterDead.textContent = parseInt(counterDead.textContent) + 1;
            } else {
                counterLost.textContent = parseInt(counterLost.textContent) + 1;
            }
        
            if(counterLost.textContent == 5) {
                alert("Вы проиграли");
                restart();
            } else if (counterDead.textContent == 10) {
                alert("Вы победили");
                restart();
            }
        }
    }
})();

function restart() {
    counterLost.textContent = 0;
    counterDead.textContent = 0;
}

