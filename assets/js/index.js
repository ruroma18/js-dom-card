'use strict';

const form = document.getElementById('login-form');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // предотвращает стандартое поведение
  const {
    target: { elements },
  } = e;

  // где искать данные из инпутов
  console.dir(elements.login.value); // основной
  console.dir(elements.password.value);
  console.dir(elements.remember.checked); // для checkbox, radio
});

// document.getElementById('btn').addEventListener('click', (e) => {
//   e.stopPropagation(); // останавливает процесс всплытия событий,
//   //  обработчики дальше по списку не запускаются
//   console.log('click on btn');
// });

// document.body.addEventListener('click', (e) => {
//   console.log('click on body');
// });
