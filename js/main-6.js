let stringgrid = '';

for (let i = 0; i < 50; i++) {
  stringgrid += `<div class='grid__element'>
  <p class="grid__element__number">${i}</p>
  </div>`;
};

document.querySelector('.grid').innerHTML = stringgrid;