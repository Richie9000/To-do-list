import {
  dragstart, dragover, dragleave, drop, dragend, remakeList,
} from './modifyList';
import {
  updateTaskCompleted, inputCreateTask, tasks, updateTaskDescription,
} from '../backend/task';

const createList = (tasklist) => {
  const ul = document.querySelector('ul');

  const title = () => {
    const li = document.createElement('li');
    li.id = 'title-box';

    const p = document.createElement('p');
    p.textContent = 'Today\'s To Do';

    const i = document.createElement('i');
    i.classList.add('fas', 'fa-sync-alt');
    i.id = 'refresh';

    li.appendChild(p);
    li.appendChild(i);

    return li;
  };

  ul.appendChild(title());

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
    input.addEventListener('click', () => updateTaskCompleted(parseInt(li.getAttribute('task'), 10), input.checked));

    const p = document.createElement('p');
    p.classList.add('description');
    p.contentEditable = 'true';
    p.textContent = task.description;
    p.addEventListener('input', () => updateTaskDescription(parseInt(li.getAttribute('task'), 10), p.textContent));

    div.appendChild(input);
    div.appendChild(p);

    li.appendChild(div);

    const i = document.createElement('i');
    i.classList.add('fas', 'fa-trash-alt');
    i.addEventListener('click', () => {
      ul.removeChild(li);

      remakeList();
    });

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
    li.addEventListener('click', () => {
      const draggables = [...document.querySelectorAll('.draggable')];

      const newList = draggables.filter((draggable) => draggable.getElementsByClassName('completed')[0].checked === false);

      draggables.forEach((draggable) => ul.removeChild(draggable));

      newList.forEach((item) => ul.appendChild(item));

      remakeList();

      const clear = document.getElementById('clear');
      ul.appendChild(clear);
    });

    return li;
  };

  const addItem = () => {
    const li = document.createElement('li');
    li.id = 'new-item-box';

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Add to your list...';
    input.id = 'new-item';
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        inputCreateTask(input.value);
        ul.appendChild(item(tasks[tasks.length - 1]));

        const clear = document.getElementById('clear');
        ul.appendChild(clear);

        input.value = '';
      }
    });

    li.appendChild(input);

    return li;
  };

  ul.appendChild(addItem());

  tasklist.sort((a, b) => ((a.index > b.index) ? 1 : -1));
  tasklist.forEach((task) => ul.appendChild(item(task)));

  ul.appendChild(clearComplete());
};

export default createList;