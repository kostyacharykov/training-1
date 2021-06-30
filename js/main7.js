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

document.querySelector('.select').addEventListener('change', function () {
  document.querySelector('.firstname').innerHTML = names[select.value].firstname;
  console.log(names[select.value].firstname);
});

document.querySelector('.select').innerHTML = stringname;
