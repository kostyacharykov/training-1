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

let worker_parameters = document.querySelector('.worker_parameters');
let select = document.querySelector('.select');
let obolochka = document.querySelector('.obolochka');

// ---------------------------------------------------------------------------------
let rer = function () {
let stringname2 = '';
staff.forEach(function(item) {
  let filterSelectValue = select.value;
  if (
    filterSelectValue == 'vsex' ||
    (filterSelectValue == 'v_otpuske' && item.onVacation) ||
    (filterSelectValue == 'rabota' && !item.onVacation)
    ) {
      stringname2 += `<div class="worker_parameters ${item.onVacation ? 'worker_parameters__onVacation' : ''}">
      <div class="worker_parameters__names_position">
      <h4 class="names">${item.name}</h4>
      <p class="position">${item.position}</p>
      </div>
      ${item.onVacation
        ? `<div class='onVacation_show'>В отпуске</div>`
        : ''
      }
      <p class="age">Возраст: ${item.age} лет</p>
      <p class="salary">Зарплата: ${item.salary} /
      месяц</p>
      </div>
      `;
    }
});
document.querySelector('.obolochka').innerHTML = stringname2;
};

document.querySelector('.select').addEventListener('change', function () {
  rer();
});

rer();