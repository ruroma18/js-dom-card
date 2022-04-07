'use strict';

const testBtn =document.getElementById('test');

testBtn.style.color = 'green';
testBtn.style.backgroundColor = 'black';
testBtn.style.fontSize = '30px';

console.log(testBtn.className);
console.log(testBtn.classList);


testBtn.classList.add('new', 'new-class-1');
testBtn.classList.remove('test', 'new-btn', 'tsfddsgsd');

testBtn.classList.toggle('toggled');
testBtn.classList.toggle('toggled');

