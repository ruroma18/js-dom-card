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

const elem = document.createElement('article');

form.append(elem);

/*
  todo-list 
  у вас есть инпутик в который вы вводите задачу которую 
  задачи должны появится в отдельном списке как элементы в верстке
  и одновременно заносится в качестве строк в отдельный массив
*/
const todoState = [];
