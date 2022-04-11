'use strict';

const form = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const {
    target: { elements },
    target,
  } = e;

  const taskText = elements.task.value.trim();

  if (taskText) {
    todoState.push(taskText);

    const li = createLiElement(taskText);
    todoList.append(li);
  }

  target.reset();
});

function createLiElement(taskText) {
  const li = document.createElement('li');
  const liTextContent = document.createTextNode(taskText);

  li.append(liTextContent, createDeleteBtn());

  return li;
}

function createDeleteBtn() {
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.addEventListener('click', deleteHander);

  return deleteBtn;
}

function deleteHander({ target: { parentElement } }) {
  parentElement.remove();
  const index = todoState.indexOf(parentElement.firstChild.textContent);

  todoState.splice(index, 1);
}

/*
  todo-list 
  у вас есть инпутик в который вы вводите задачу которую 
  задачи должны появится в отдельном списке как элементы в верстке
  и одновременно заносится в качестве строк в отдельный массив
*/
const todoState = [];
