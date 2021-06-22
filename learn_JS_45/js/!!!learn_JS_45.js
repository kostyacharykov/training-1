'use strict';

// function user(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function () {
//     console.log(`Hello ${this.name}`);
//   };
// }

// user.prototype.exit = function () {
//   console.log(`Пользователь ${this.name} ушел`);
// };

// const ivan = new user('Ivan', 28);
// const alex = new user('alex', 20);

// ivan.exit();

// ivan.hello();
// alex.hello();

// console.log(ivan);
// console.log(alex);

// ------------------------------------------

//This

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }

//   console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//   a: 20,
//   b: 15,
//   sum: function () {
//     console.log(this);
//   }
// }

// obj.sum();

// function user(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// };

// let ivan = new user('Ivan', 23);

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// const user = {
//   name: 'John',
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//   return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));

// 1) Обычная функция: this = window, если стоит usse strict - undefined
// 2) Контекст у методов обьекта - сам обьект
// 3) this в конструкторах и классах - это новый экземпляр обьекта
// 4) Ручная привязка this: call, apply, bind


const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
  e.target.style.backgroundColor = 'red';
  // console.log(this);
});

const obj = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this.num);
    };

    say();
  }
};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));