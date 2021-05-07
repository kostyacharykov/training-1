const names = [
  {
  secondname: '',
  firstname: '',
},
  {
  secondname: 'Дурнев',
  firstname: 'Константин',
},
  {
  secondname: 'Заросило',
  firstname: 'Ирина',
},
  {
  secondname: 'Чарыков',
  firstname: 'Константин',
},
  {
  secondname: 'Чащина',
  firstname: 'Оксана',
},
];

let select = document.querySelector('.select');
let firstname = document.querySelector('.firstname');
let stringname = '';
let stringname2 = '';

  names.forEach(function(item, i) {
    stringname += `<option value="${i}">${item.secondname}</option>`;
  });

document.querySelector('.select').addEventListener('change', function (item) {
  document.querySelector('.firstname').innerHTML = names[select.value].firstname;
  stringname2 += `<div class="firstname">${item.firstname}</div>`;
  console.log(names[select.value].firstname);
});

document.querySelector('.select').innerHTML = stringname;
// document.querySelector('.firstname').innerHTML = stringname2;
