let grid = document.querySelector('.grid');
let grid__element__number = document.querySelector('.grid__element__number');
let grid__element = document.querySelector('.grid__element');

for (let i = 0; i < 50; i++) {
  let numberarr = `<p class="grid__element__number">${i}</p>`;
  let grid__element = document.createElement('div');
  grid__element.classList.add('grid__element');
  grid__element.innerHTML = numberarr;

  grid.append(grid__element);
};