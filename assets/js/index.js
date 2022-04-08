'use strict';

// data-*

const [btn1] = document.querySelectorAll('button');

const attr1 = btn1.getAttribute('my-attr');

const attr2 = btn1.getAttribute('data-my-attr');

btn1.addEventListener('click', (e) => {
  
  const {
    target: { dataset: {myAttr} },
  } = e;

  console.log(myAttr);
});

/*
  Есть див с конпками
  по нажатию на кнопку поменять цвет / цвет фона дива на тот
  который на кнопке указан
  информация про цвет кнопки хранится в data-* аттрибуте

*/
