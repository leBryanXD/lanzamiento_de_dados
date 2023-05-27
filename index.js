let ResultDice1 = Math.floor(Math.random() * (7 - 1) + 1);
let ResultDice2 = Math.floor(Math.random() * (7 - 1) + 1);

let dice1 = "dados/cara dado " + ResultDice1 + ".png";
let dice2 = "dados/cara dado " + ResultDice2 + ".png";

let btn = document.querySelector("button");
btn.addEventListener("click", game);

function game() {
  if (dice1 > dice2) {
    document
      .querySelectorAll("img")[0]
      .setAttribute("src", "multimedia/victoria.png");
    document
      .querySelectorAll("img")[1]
      .setAttribute("src", "multimedia/derrota.png");
    document.querySelector("h1").textContent = "El Jugador 1 es el ganador";
  } else if (dice1 == dice2) {
    document
      .querySelectorAll("img")[0]
      .setAttribute("src", "multimedia/empate.png");
    document
      .querySelectorAll("img")[1]
      .setAttribute("src", "multimedia/empate.png");
    document.querySelector("h1").textContent = "Empate...";
  } else {
    document
      .querySelectorAll("img")[0]
      .setAttribute("src", "multimedia/derrota.png");
    document
      .querySelectorAll("img")[1]
      .setAttribute("src", "multimedia/victoria.png");
    document.querySelector("h1").textContent = "El Jugador 2 es el ganador";
  }
  document.querySelectorAll("img")[2].setAttribute("src", dice1);
  document.querySelectorAll("img")[3].setAttribute("src", dice2);
}
