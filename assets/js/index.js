'use strict';

/*
  Даны 2 конпки
  при наведении на кнопку надо 
  поменять текст на текст с другой кнопки
*/

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

function switchHandler(e) {
  const firstButtonText = btn1.textContent;
  btn1.textContent = btn2.textContent;
  btn2.textContent = firstButtonText;
}

btn1.addEventListener('mouseover', switchHandler);
btn2.addEventListener('mouseover', switchHandler);
