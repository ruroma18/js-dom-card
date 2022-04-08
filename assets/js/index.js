'use strict';

/*
  Есть див с конпками
  по нажатию на кнопку поменять цвет / цвет фона дива на тот
  который на кнопке указан
  информация про цвет кнопки хранится в data-* аттрибуте
*/

// const div = document.getElementById('root');

// function listener(e) {
//   const {
//     target: {
//       dataset: { color },
//       parentElement,
//     },
//   } = e;
//   console.dir(e.target);
//   parentElement.style.backgroundColor = color;
// }

// const btns = document.querySelectorAll('button');

// btns.forEach((btn) => {
//   btn.addEventListener('click', listener);
// });

function listener(e) {}

const div = document.querySelector('#root');

div.addEventListener('click', (e) => {
  const {
    currentTarget,
    target: {
      dataset: { color },
    },
  } = e;
  if (color) {
    currentTarget.style.backgroundColor = color;
  }
});
