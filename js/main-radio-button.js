
let block = document.querySelector('.block');
let input_red = document.querySelector('.input_red');
let input_green = document.querySelector('.input_green');
let input_little = document.querySelector('.input_little');
let input_big = document.querySelector('.input_big');

// ---------------------------------------------------------------------------------
let wer = function (input, property) {
  input.addEventListener('click', function () {
    block.classList.toggle(property);
  });
};

wer(input_red, 'color_red');
wer(input_green, 'color_green');
wer(input_little, 'size_big');
wer(input_big, 'size_little');

// input_green.addEventListener('click', function () {
//   block.classList.toggle('color_green');
// });

// input_little.addEventListener('click', function () {
//   block.classList.toggle('size_big');
// });

// input_big.addEventListener('click', function () {
//   block.classList.toggle('size_little');
// });