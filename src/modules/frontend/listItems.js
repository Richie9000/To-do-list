import {
  dragstart, dragover, dragleave, drop, dragend,
} from './dragndrop';
import updateTask from './completed';

const createList = (tasks) => {
  const title = () => {
    const li = document.createElement('li');
    li.id = 'title-box';

    const p = document.createElement('p');
    p.textContent = 'Today\'s To Do';

    const i = document.createElement('i');
    i.classList.add('fas', 'fa-redo');
    i.id = 'refresh';

    li.appendChild(p);
    li.appendChild(i);

    return li;
  };

  const addItem = () => {
    const li = document.createElement('li');
    li.id = 'new-item-box';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add to your list...';
    input.id = 'new-item';

    li.appendChild(input);

    return li;
  };

  const item = (task) => {
    const li = document.createElement('li');
    li.classList.add('draggable');
    li.setAttribute('task', task.index);
    li.draggable = true;

    const div = document.createElement('div');

    const input = document.createElement('input');
    input.classList.add('completed');
    input.type = 'checkbox';
    input.name = 'completed';
    input.addEventListener('click', () => updateTask(task, input.checked));

    const p = document.createElement('p');
    p.classList.add('description');
    p.textContent = task.description;

    div.appendChild(input);
    div.appendChild(p);

    li.appendChild(div);

    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash');

    li.addEventListener('dragstart', () => dragstart(li));

    li.addEventListener('dragover', (e) => dragover(li, e));

    li.addEventListener('dragleave', () => dragleave(li));

    li.addEventListener('drop', () => {
      drop(li);
    });

    li.addEventListener('dragend', () => {
      dragend(li);
    });

    li.appendChild(i);

    return li;
  };

  const clearComplete = () => {
    const li = document.createElement('li');

    li.textContent = 'Clear all completed';
    li.id = 'clear';

    return li;
  };

  const ul = document.querySelector('ul');

  ul.appendChild(title());
  ul.appendChild(addItem());

  tasks.sort((a, b) => ((a.index > b.index) ? 1 : -1));
  tasks.forEach((task) => ul.appendChild(item(task)));

  ul.appendChild(clearComplete());
};

export default createList;