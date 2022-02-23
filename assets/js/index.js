window; // глобальный обьект браузера

window.document; // DOM

document; // тоже DOM

let clickCount = 0;

function clickHandler() {
  alert(`Вы нажали ${(clickCount += 1)} раз`);
}
// кому
const [button] = document.getElementsByTagName('button');
// как
button.addEventListener('click', clickHandler);

/*
  Сделайте чтобы по клику на кнопку
  вам выводилось число кликов 
  которое вы уже совершили
*/

// поиск элементов
// document.getElementsByTagName - все элементы с определенным тегом
const headers = document.getElementsByClassName('header-text');

const nameInputs = document.getElementsByName('firstName');
const textPar = document.getElementById('main-text');

const elem = document.querySelector('.main-article > .text');
const nameSelector = document.querySelector('[name]');
const nameSelectors = document.querySelectorAll('[name]');
