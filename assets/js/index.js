'use strict';

/*
  Даны 2 конпки
  при наведении на кнопку close она должна от нас убегать
  при наведении на Open никто никуда не бежит
*/

const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');

function listener(e) {
  console.log(e.currentTarget);
}

btn1.addEventListener('click', listener, { capture: true, once: true });
document.body.addEventListener('click', listener, true);
document.documentElement.addEventListener('click', listener, true);
document.addEventListener('click', listener);
window.addEventListener('click', listener, true);
