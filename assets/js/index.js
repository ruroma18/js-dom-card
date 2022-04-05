'use strict';

const btn1 = document.getElementById('btn1');
const article = document.querySelector('.main-article')

const listener = (event) => {
  console.group();
  console.log(event.target); // куда кликнули
  console.log(event.currentTarget); // тот чей обработчик
  console.groupEnd();
};

btn1.addEventListener('click', listener);
article.addEventListener('click', listener);
document.body.addEventListener('click', listener);
document.addEventListener('click', listener);


// btn1.removeEventListener('click',listener);
