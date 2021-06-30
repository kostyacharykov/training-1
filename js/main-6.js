let stringgrid = '';

for (let i = 0; i < 50; i++) {
  stringgrid += `<div class='grid__element'  style="background: rgb(${i+40}, ${i+130}, ${i+100});">
  <p class="grid__element__number">${i}</p>
  </div>`;
};

document.querySelector('.grid').innerHTML = stringgrid;