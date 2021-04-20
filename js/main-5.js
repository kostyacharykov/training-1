let hystmodal = document.querySelector('.hystmodal');
let button = document.querySelector('.open');
let hystmodal__close = document.querySelector('.hystmodal__close');
let hystmodal__save = document.querySelector('.hystmodal__save');
let hystmodal__area__input_name = document.querySelector('.hystmodal__area__input-name');
let hystmodal__area__input_post = document.querySelector('.hystmodal__area__input-post');
let div = document.querySelector('.div');

button.addEventListener('click', function () {
  hystmodal.style.display = 'block';
});

hystmodal__close.addEventListener('click', function () {
  hystmodal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if(event.target == hystmodal) {
  hystmodal.style.display = 'none';
  }
});

let addtask = function () {
  div.innerHTML = `<h1 class="please">Спасибо, что заполнили.</h1>
    <h1 class="please">Ваше имя: ${hystmodal__area__input_name.value}</h1>
    <h1 class="please">Ваша должность: ${hystmodal__area__input_post.value}</h1>`;
};

hystmodal__save.addEventListener('click', function () {
  if (hystmodal__area__input_name.value != '', hystmodal__area__input_post.value != '') {
  hystmodal.style.display = 'none';
  addtask();
  }
});