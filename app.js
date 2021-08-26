document.addEventListener("DOMContentLoaded", () => {
  const width = 4;
  const grid = document.querySelector(".grid");
  const chosenCards = [];
  const cards = [];

  //create your board
  function createBoard() {
    const numbers = Array(width * width)
      .fill()
      .map((_, index) => parseInt(index / 2) + 1);
    numbers.sort(() => Math.random() - 0.5);

    for (let i = 0; i < width * width; i++) {
      const card = document.createElement("div");
      card.innerHTML = "*";
      card.setAttribute("data-index", i);
      card.setAttribute("data-value", numbers[i]);
      card.addEventListener("click", function (e) {
        flipCard(card);
      });
      cards.push(card);
      grid.appendChild(card);
    }
  }

  function flipCard(card) {
    const index = card.getAttribute("data-index");
    const value = card.getAttribute("data-value");
    if(chosenCards.length <= 1) {
      chosenCards.push(index);
      card.innerHTML = value;
    }

    if(chosenCards.length== 2) {
setTimeout(() => {
  const firstCardIndex = chosenCards[0];
  const secondCardIndex = chosenCards[1];




  if(ch)

}, 500);
    }
    
  }

  function init() {
    createBoard();
  }

  init();
});
