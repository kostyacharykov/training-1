let button0 = document.querySelector('.button0');
let button1 = document.querySelector('.button1');
let button2 = document.querySelector('.button2');
let block = document.querySelector('.block');

let rer = function (button, myclass) {
  button.addEventListener('click', function () {
  block.classList.toggle(myclass);
  })
};

rer(button0, 'redblock');
rer(button1, 'longblock');
rer(button2, 'highblock');

console.log(block.classList.contains('redblock'));