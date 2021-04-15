let button0 = document.querySelector('.add-field__addend');
let textadd = document.querySelector('.add-field__exercise');
let area = document.querySelector('.area__half-area');

let addtask = function () {
  if (textadd.value & 1) {
    area.insertAdjacentHTML('beforeend',`<div class="area__element">
    <input type="checkbox" class="area__element__check">
    <p class="area__element__text1">Число нечётное</p>
    <a class='area__element__delete'><img src="img/trash 1.svg" class="area__element__trash"></a>
    </div>`); // Добавляем элемент в конец списка area, 'beforeend' - аргумент, передающий позицию.
    textadd.value = ''; // Удалить текст в поле textadd, в нашем случае конкретно после нажатия кнопки
  } else {
    area.insertAdjacentHTML('beforeend',`<div class="area__element">
    <input type="checkbox" class="area__element__check">
    <p class="area__element__text1">Число чётное</p>
    <a class='area__element__delete'><img src="img/trash 1.svg" class="area__element__trash"></a>
    </div>`); // Добавляем элемент в конец списка area, 'beforeend' - аргумент, передающий позицию.
    textadd.value = ''; 
  }
};

button0.addEventListener('click', function() {
    addtask();
});

textadd.addEventListener('keydown', function (params) {
  if (params.key == 'Enter') { 
    addtask();
  };
});

// button.addEventListener('click', function() {
//   if (textadd.value != '') { // Условие, при котором значение текста в поле для добавления должно быть не равно пустоте
//     area.insertAdjacentHTML('beforeend',`<div class="area__element">
//     <input type="checkbox" class="area__element__check">
//     <p class="area__element__text1">${textadd.value}</p>
//     <img src="img/trash 1.svg" class="area__element__trash">
//     </div>`); // Добавляем элемент в конец списка area, 'beforeend' - аргумент, передающий позицию.
//     textadd.value = ''; // Удалить текст в поле textadd, в нашем случае конкретно после нажатия кнопки
//   };
// });

// textadd.addEventListener('keydown', function (params) {
//   if (params.key == 'Enter') { 
//     if (textadd.value != '') { // Условие, при котором значение текста в поле для добавления должно быть не равно пустоте
//       area.insertAdjacentHTML('beforeend',`<div class="area__element">
//       <input type="checkbox" class="area__element__check">
//       <p class="area__element__text1">${textadd.value}</p>
//       <img src="img/trash 1.svg" class="area__element__trash">
//       </div>`); // Добавляем элемент в конец списка area, 'beforeend' - аргумент, передающий позицию.
//       textadd.value = ''; // Удалить текст в поле textadd, в нашем случае конкретно после нажатия кнопки
//     };
//   };
// });