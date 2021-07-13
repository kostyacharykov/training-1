"use strict";

// filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter(function(name) {
  return name.length < 5;
});

console.log(shortNames);

// Map

const answers = ['IvAN', 'AnnA', 'Hello'];

const result = answers.map(item => item.toLowerCase());

console.log(result);

// every/some

const some = [4, 'qwq', 'ssfdfd'];

console.log(some.some(item => typeof(item) === 'number'));
// Some: Хотя бы один элемент в массиве попадает под условие

console.log(some.every(item => typeof(item) === 'number'));
// Every: Все элементы в массиве попадают под условие

// reduce: собирает массив в одно целое

const arr = [4, 5, 1, 3, 2, 6];
  // Логика метода reduce: 3  +   4
                        // 4  +   5
                        // 9  +   1
                        // 10 +   3
                        // 13 +   2
                        // 15 +   6
                        // 21
const res = arr.reduce((sum, current) => sum + current, 3);

console.log(res);


const arr = ['apple', 'pear', 'plum'];

const res = arr.reduce((sum, current) => `${sum}, ${current}`);

console.log(res);


const obj = {
  ivan: 'persone',
  ann: 'persone',
  dog: 'animal',
  cat: 'animal',
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);