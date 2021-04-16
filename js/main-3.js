let button0 = document.querySelector('.show');
let button1 = document.querySelector('.hide');
let block = document.querySelector('.block');

button1.disabled = true;

button0.addEventListener('click', function () {
  if (block.style.display = "block") {
  button0.disabled = true;
  button1.disabled = false;
  }
});

button1.addEventListener('click', function () {
  if (block.style.display = "none") {
  button1.disabled = true;
  button0.disabled = false;
  }
});