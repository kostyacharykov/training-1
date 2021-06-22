// Rest складывает обьекты в массив

const log = function(a, b, ...rest) {
  console.log(a, b, rest);
}

log('basic', 'rest', 'operator', 'usage');

function calsOrDouble(number, basis = 2) {
  // basis = basis || 2;
  console.log(number * basis);
}

calsOrDouble(3);