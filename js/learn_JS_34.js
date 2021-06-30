// touchstart возникновение касания к элементу
// touchmove при касании к элементу палец начинает двигаться
// touchend палец оторвался от элемента
// touchenter палец зашел на пределы элемента
// youchleave палец продолжил скользить и ушел за пределы элемента
// touchcancel точка соприкосновения больше не регистрируется на поверхности

window.addEventListener('DOMContentLoaded', () => {
  const box = document.querySelector('.box');

  box.addEventListener('touchstart', (e) => {
    e.preventDefault();

    console.log('Start');
    console.log(e.targetTouches);
  });

  box.addEventListener('touchmove', (e) => {
    e.preventDefault();

    console.log(e.targetTouches[0].pageX);
  });

  // box.addEventListener('touchend', (e) => {
  //   e.preventDefault();

  //   console.log('End');
  // });
});

// touches список всех пальцев, которые сейчас взаимодействуют с экраном
// targetTouches 
// changedTouches список пальцев, учавствующих в событии, даже если один убрали
