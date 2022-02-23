window; // глобальный обьект браузера

window.document; // DOM

document; // тоже DOM

let clickCount = 0;

const [button] = document.getElementsByTagName('button');

button.addEventListener('click', clickHandler);

function clickHandler() {
  button.textContent = `<h1>Меня нажали ${(clickCount += 1)} раз</h1>`;
  button.style.padding = `${clickCount}px`;
}

// поиск элементов
// document.getElementsByTagName - все элементы с определенным тегом
const headers = document.getElementsByClassName('header-text');

const nameInputs = document.getElementsByName('firstName');
const textPar = document.getElementById('main-text');

const elem = document.querySelector('.main-article > .text');
const nameSelector = document.querySelector('[name]');
const nameSelectors = document.querySelectorAll('[name]');

const taskBtn = document.querySelector('#addTaskBtn');

const taskList = document.querySelector('#task-list');

taskBtn.addEventListener('click', addTaskListener);

let taskCounter = 1;

function addTaskListener() {
  const listItemElem = document.createElement('li');
  listItemElem.textContent = `Task ${taskCounter++}`;
  taskList.append(listItemElem);
  console.log(listItemElem);
}

/*
Создайте кнопку добавления сообщений
кнпка будет добавлять елементы параграфов с текстом "сообщения"
текст должен иметь синий цвет и размер шрифта должен быть 20 пикселей
текст будет присеодинятся к элементу body
*/


// text-align -> textAlign