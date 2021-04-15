let button0 = document.querySelector('.add-field__addend');
let textadd = document.querySelector('.add-field__exercise');
let textadd1 = document.querySelector('.add-field__month');
let area = document.querySelector('.area__half-area');

let eba = function (zp) {
  area.innerHTML = `<div class="area__element">
   <input type="checkbox" class="area__element__check">
   <p class="area__element__text1">${zp}</p>
   <a class='area__element__delete'><img src="img/trash 1.svg" class="area__element__trash"></a>
   </div>`;
};

let addtask = function () {
  if (textadd.value * textadd1.value < 100000) {
  eba('СЛИШКОМ МАЛО РУБЛЕЙ БЛЯ, ЛОХ ЕБАНЫЙ');
  } else if (textadd.value * textadd1.value > 10000000) {
  eba('ТЫ ШО ОХУЕЛ БЛЯ РУБЛЕЙ');
  } else { 
    eba(textadd.value * textadd1.value + ' рублей');  
  }
};

textadd.addEventListener('input', function() {
    addtask();
});

textadd1.addEventListener('input', function() {
    addtask();
});