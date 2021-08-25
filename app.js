document.addEventListener('DOMContentLoaded', () => {

  const width = 4;
  const grid = document.querySelector('.grid')

  //create your board
  function createBoard() {
    const numbers = Array(width*width).fill().map((_, index) => parseInt(index/2) + 1);
    numbers.sort(()=>Math.random()-0.5);

    for (let i = 0; i < width*width; i++) {
      const card = document.createElement('div');
      card.innerHTML = numbers[i];
      grid.appendChild(card)
    }
  }

  
  function init() {
    createBoard();
  }

  init();
})
