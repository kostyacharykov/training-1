let block = document.querySelector('.block');
let input_red = document.querySelector('.input_red');
let input_green = document.querySelector('.input_green');
let input_little = document.querySelector('.input_little');
let input_big = document.querySelector('.input_big');

// ---------------------------------------------------------------------------------
let change_property = function (input, property, property_del) {
  input.addEventListener('change', function () {
    if (input.checked) {
      block.classList.remove(property_del);
      block.classList.add(property);
    };
    console.log(block.classList);
  });
};

change_property(input_red, 'color_red', 'color_green');
change_property(input_green, 'color_green', 'color_red');
change_property(input_little, 'size_big', 'size_little');
change_property(input_big, 'size_little', 'size_big');