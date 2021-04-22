let stringgrid = '';

for (let i = 0; i < 50; i++) {
  stringgrid += `<div class='grid__element'  style="background: rgb(${i+0}, ${i+130}, ${i+200});">
  <p class="grid__element__number">${i}</p>
  </div>`;
};

document.querySelector('.grid').innerHTML = stringgrid;