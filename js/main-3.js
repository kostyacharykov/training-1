// let button0 = document.querySelector('.show');
// let button1 = document.querySelector('.hide');
// let block = document.querySelector('.block');

// button1.disabled = true;

// button0.addEventListener('click', function () {
//   block.style.display = "block"
//   button0.disabled = true;
//   button1.disabled = false;
// });

// button1.addEventListener('click', function () {
//   block.style.display = "none"
//   button1.disabled = true;
//   button0.disabled = false;
// });

let button = document.querySelector('.button');
let block = document.querySelector('.showblock');

button.addEventListener('click', function () {
  if (block.classList.contains('showblock')) {
    block.classList.remove('showblock');
    block.classList.add('hideblock');
  } else {
    block.classList.remove('hideblock');
    block.classList.add('showblock');
  }
});
console.log(block.classList.contains('showblock'));
// console.log(block.classList.contains('hideblock'));