'use strict';

/*
  Даны 2 конпки
  при наведении на кнопку close она должна от нас убегать
  при наведении на Open никто никуда не бежит
*/

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

function switchHandler(e) {
  const openButton = e.target === btn1 ? btn1 : btn2;
  const closeButton = e.target === btn1 ? btn2 : btn1;

  const firstButtonText = openButton.textContent;
  openButton.textContent = closeButton.textContent;
  closeButton.textContent = firstButtonText;

  openButton.removeEventListener('mouseover', switchHandler);
  closeButton.addEventListener('mouseover', switchHandler);
}

btn2.addEventListener('mouseover', switchHandler);
