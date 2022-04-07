'use strict';

// const imgSrcArray = [
//   'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
//   'https://tinypng.com/images/social/website.jpg',
// ];

const btn1 = document.getElementById('btn1');
const div = document.getElementById('div');
const img = document.getElementById('img');

// let currentIndex = 0;

function listener(e) {
  // const nextSrc = currentIndex === 0 ? imgSrcArray[1] : imgSrcArray[0];
  // currentIndex = currentIndex === 0 ? 1 : 0;
  // img.setAttribute('src', nextSrc);

  console.log(e);
}

const test = {
  name: 213,
};

const set = img.setAttribute('alt', 'new text description'); // устанавливает
const has = img.hasAttribute('alt'); // проверка наличия возвращает булевое
const get = img.getAttribute('alt'); // получение значения
const remove = img.removeAttribute('alt'); // удаление аттрибута

/*
  Сделать простой слайдер
  состоит из 2 кнопок по бокам
  и картинки, которая будет менятся
  ссылки для картинок хранятся в отдельном массиве
  
  *сделать так чтобы картинки были зациклены
*/