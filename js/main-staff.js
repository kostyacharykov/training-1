const staff = [
  {
    name: 'Алексей Иванов',
    position: 'Программист',
    age: 32,
    salary: '50000',
    onVacation: false,
  },
  {
    name: 'Дмитрий Сидоров',
    position: 'Менеджер',
    age: 12,
    salary: '90000',
    onVacation: false,
  },
  {
    name: 'Андрей Самойлов',
    position: 'Скрам-мастер',
    age: 99,
    salary: '50000',
    onVacation: true,
  },
  {
    name: 'Иван Дорн',
    position: 'Программист',
    age: 43,
    salary: '50000',
    onVacation: false,
  },
];

const seework = ['Всех', 'Работает', 'В отпуске'];
let stringname = '';
let stringname2 = '';
let worker_parameters = document.querySelector('.worker_parameters');
let select = document.querySelector('.select');
let obolochka = document.querySelector('.obolochka');

seework.forEach(function(item, i) {
  stringname += `<option value="${i}">${item}</option>`;
});

document.querySelector('.select').innerHTML = stringname;



document.querySelector('.select').addEventListener('change', function (item) {
  document.querySelector('.obolochka').innerHTML = stringname2;
  if (select.value == 0) {
  staff.forEach(function(item) {
    stringname2 += `<div class="worker_parameters ${item.onVacation ? 'worker_parameters__onVacation' : ''}">
    <div class="worker_parameters__names_position">
    <h4 class="names">${item.name}</h4>
    <p class="position">${item.position}</p>
    </div>
    <div class='onVacation_hide ${item.onVacation ? 'onVacation_show' : ''}'>В отпуске</div>
    <p class="age">Возраст: ${item.age} лет</p>
    <p class="salary">Зарплата: ${item.salary} / месяц</p>
    </div>`;
  });
} else if (select.value == 1) {
  staff.forEach(function(item) {
    stringname2 += `<div class="worker_parameters ${item.onVacation ? 'worker_parameters__hide' : 'worker_parameters'}">
    <div class="worker_parameters__names_position">
    <h4 class="names">${item.name}</h4>
    <p class="position">${item.position}</p>
    </div>
    <div class='onVacation_hide ${item.onVacation ? 'onVacation_hide' : 'onVacation_hide'}'>В отпуске</div>
    <p class="age">Возраст: ${item.age} лет</p>
    <p class="salary">Зарплата: ${item.salary} / месяц</p>
    </div>`;
  });
} else {
  staff.forEach(function(item) {
    stringname2 += `<div class="worker_parameters ${item.onVacation ? 'worker_parameters' : 'worker_parameters__hide'}">
    <div class="worker_parameters__names_position">
    <h4 class="names">${item.name}</h4>
    <p class="position">${item.position}</p>
    </div>
    <div class='onVacation_hide ${item.onVacation ? 'onVacation_show' : 'onVacation_hide'}'>В отпуске</div>
    <p class="age">Возраст: ${item.age} лет</p>
    <p class="salary">Зарплата: ${item.salary} / месяц</p>
    </div>`;
  });
};
});

console.log(worker_parameters.classList);