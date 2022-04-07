'use strict';

const imgSrcArray = [
  'data:image/jpeg;base64,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',
  'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
  'https://tinypng.com/images/social/website.jpg',
];

let currentIndex = 0;

const nextBtn = document.getElementById('btn1');
const prevBtn = document.getElementById('btn2');
const img = document.getElementById('img');

function prevBtnListener() {
  img.setAttribute('src', imgSrcArray[--currentIndex]);
}

function nextBtnListener() {
  img.setAttribute('src', imgSrcArray[++currentIndex]);
}

// function btnListener(direction = 'next') {
//   return function () {
//     if (direction === 'next' && currentIndex + 1 >= imgSrcArray.length) {
//       currentIndex = 0; // перепрыг
//     } else if (direction === 'next' && currentIndex + 1 < imgSrcArray.length) {
//       currentIndex++;
//     } else if (direction === 'prev' && currentIndex - 1 < 0) {
//       currentIndex = imgSrcArray.length - 1; // перепрыг
//     } else if (direction === 'prev' && currentIndex - 1 >= 0) {
//       currentIndex--;
//     }
//     img.setAttribute('src', imgSrcArray[currentIndex]);
//   };
// }

function btnListener(direction = 'next') {
  return function () {
    debugger;
    currentIndex =
      direction === 'next'
        ? (currentIndex + 1) % imgSrcArray.length
        : (currentIndex - 1 + imgSrcArray.length) % imgSrcArray.length;
    img.setAttribute('src', imgSrcArray[currentIndex]);
  };
}

btnListener('next');

prevBtn.addEventListener('click', btnListener('prev'));
nextBtn.addEventListener('click', btnListener('next'));

// const set = img.setAttribute('alt', 'new text description'); // устанавливает
// const has = img.hasAttribute('alt'); // проверка наличия возвращает булевое
// const get = img.getAttribute('alt'); // получение значения
// const remove = img.removeAttribute('alt'); // удаление аттрибута

/*
  Сделать простой слайдер
  состоит из 2 кнопок по бокам
  и картинки, которая будет менятся
  ссылки для картинок хранятся в отдельном массиве

  *сделать так чтобы картинки были зациклены
*/
