import { clearTasks, addTask, store } from '../backend/task';

const remakeList = () => {
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

    addTask(description, completed, index);

    store();
  });
};

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

  remakeList();

  element.classList.remove('dragover');
};

const dragend = (element) => {
  element.classList.remove('flying');
};

export {
  dragstart, dragover, dragleave, drop, dragend, remakeList,
};