import { clearTasks, addTasks, store } from '../backend/Tasks';

const dragstart = (element) => {
  element.classList.add('flying');
};

const dragover = (element, e) => {
  e.preventDefault();

  element.classList.add('dragover');
};

const dragleave = (element) => {
  element.classList.remove('dragover');
};

const drop = (element) => {
  const flying = document.querySelector('.flying');

  element.before(flying);

  const draggables = document.querySelectorAll('.draggable');

  let i = 0;
  draggables.forEach((draggable) => {
    draggable.setAttribute('task', i);
    i += 1;
  });

  clearTasks();
  draggables.forEach((draggable) => {
    const description = draggable.getElementsByClassName('description')[0].textContent;
    const completed = draggable.getElementsByClassName('completed')[0].checked;
    const index = draggable.getAttribute('task');

    addTasks(description, completed, index);

    store();
  });

  element.classList.remove('dragover');
};

const dragend = (element) => {
  element.classList.remove('flying');
};

export {
  dragstart, dragover, dragleave, drop, dragend,
};