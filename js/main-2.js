let button0 = document.querySelector('.add-field__addend');
let textadd = document.querySelector('.add-field__exercise');
let area = document.querySelector('.area__half-area');

let eba = function (zp) {
  area.innerHTML = `<div class="area__element">
   <input type="checkbox" class="area__element__check">
   <p class="area__element__text1">${zp}</p>
   <a class='area__element__delete'><img src="img/trash 1.svg" class="area__element__trash"></a>
   </div>`;
};

let addtask = function () {
  if (textadd.value * 12 < 100000) {
  area.innerHTML = eba;
  eba('СЛИШКОМ МАЛО РУБЛЕЙ БЛЯ, ЛОХ ЕБАНЫЙ');
  } else if (textadd.value * 12 > 1000000) {
    area.innerHTML = eba;
  eba('ТЫ ШО ОХУЕЛ БЛЯ РУБЛЕЙ');
  } else { 
    area.innerHTML = eba;
    eba(textadd.value * 12 + ' рублей');  
  }
};

textadd.addEventListener('input', function() {
    addtask();
});