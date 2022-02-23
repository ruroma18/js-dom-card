window; // глобальный обьект браузера

window.document; // DOM

document; // тоже DOM

// что делать
function clickHandler() {
  alert('на меня нажали');
}
// кому
const [button] = document.getElementsByTagName('button');
// как
button.addEventListener('click', clickHandler);
