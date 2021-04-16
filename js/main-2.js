let button0 = document.querySelector('.add-field__addend');
let textadd = document.querySelector('.add-field__exercise');
let textadd1 = document.querySelector('.add-field__month');
let area = document.querySelector('.area__half-area');

// const imagefunc = [
//   img1 = 'img/piggy-bank.svg',
//   img2 = 'img/save-money.svg',
//   img3 = 'img/money.svg',
// ];

let eba = function (zp, img) {
   return `<div class="area__element">
   <input type="checkbox" class="area__element__check">
   <p class="area__element__text1">${zp}</p>
   <a class='area__element__delete'><img src="${img}" class="area__element__trash"></a>
   </div>`;
  };

let addtask = function (rer) {
  rer = textadd.value * textadd1.value;
  if (rer < 100000) {
    area.innerHTML = eba('СЛИШКОМ МАЛО РУБЛЕЙ БЛЯ, ЛОХ ЕБАНЫЙ', 'img/piggy-bank.svg');
  } else if (rer > 10000000) {
    area.innerHTML = eba('ТЫ ШО ОХУЕЛ БЛЯ РУБЛЕЙ', 'img/money.svg');
  } else { 
    area.innerHTML = eba(rer + ' рублей', 'img/save-money.svg');  
  }
};

textadd.addEventListener('input', function() {
    addtask();
});

textadd1.addEventListener('input', function() {
    addtask();
});