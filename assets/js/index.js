'use strict';

const imgSrcArray = [
  'https://www.bhaktiphotos.com/wp-content/uploads/2018/04/Mahadev-Bhagwan-Photo-for-Devotee.jpg',
  'https://tinypng.com/images/social/website.jpg',
];

const btn1 = document.getElementById('btn1');
const img = document.getElementById('img');

let currentIndex = 0;

function listener(e) {
  const nextSrc = currentIndex === 0 ? imgSrcArray[1] : imgSrcArray[0];
  currentIndex = currentIndex === 0 ? 1 : 0;
  img.setAttribute('src', nextSrc);
}

btn1.addEventListener('click', listener);
