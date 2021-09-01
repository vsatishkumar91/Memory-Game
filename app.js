document.addEventListener("DOMContentLoaded", () => {
  const width = 4;
  const grid = document.querySelector(".grid");
  const timeCompleted = document.querySelector('#time-completed');
  let chosenCards = [];
  let time = 0;
  let timeInterval;
  const cards = [];

  //create your board
  function createBoard() {
    const numbers = Array(width * width)
      .fill()
      .map((_, index) => parseInt(index / 2) + 1);
    numbers.sort(() => Math.random() - 0.5);

    for (let i = 0; i < width * width; i++) {
      const card = document.createElement("div");
      card.innerHTML = numbers[i];
      card.setAttribute("data-index", i);
      card.setAttribute("data-value", numbers[i]);
      card.classList.add('default');
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

    if(card.classList.contains('opened')) return;

    if (chosenCards.length == 1 && chosenCards[0] == index) return;

    if (chosenCards.length <= 1) {
      chosenCards.push(index);
      card.classList.add('flip-'+value);
    }

    if (chosenCards.length == 2) {
      setTimeout(() => {
        const firstCardIndex = chosenCards[0];
        const secondCardIndex = chosenCards[1];

        const firstCardValue = cards[firstCardIndex].getAttribute("data-value");
        const secondCardValue = cards[secondCardIndex].getAttribute("data-value");

        if (firstCardValue === secondCardValue) {
          chosenCards = [];
          cards[firstCardIndex].innerHTML = firstCardValue;
          cards[secondCardIndex].innerHTML = secondCardValue;
          cards[firstCardIndex].classList.add('flip-'+firstCardValue);
          cards[secondCardIndex].classList.add('flip-'+secondCardValue);

          cards[firstCardIndex].classList.add('opened');
          cards[secondCardIndex].classList.add('opened');
        } else {
          chosenCards = [];
          cards[firstCardIndex].className = "default";
          cards[secondCardIndex].className = "default";
        }

      }, 500);
    }

  }

  function isGameOver() {
    isGameOver = true;
    squares.forEach((item) => {
      if (item.classList.contains("bomb")) {
        item.classList.add('blast');
      }
    });
    result.innerHTML = "You loose the game. Better luck next time!";
    clearInterval(timeInterval);
  }


  function init() {
    createBoard();
    timeCompleted.innerHTML = time;
    timeInterval = setInterval(() => {
      time++;
      timeCompleted.innerHTML = time;
    }, 1000);
  }

  init();
});
