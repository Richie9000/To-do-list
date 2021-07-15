import tasks from './tasks';

function createItem(task) {
  const li = document.createElement('li');
  li.classList.add('list-item');
  const div = document.createElement('div');
  div.classList.add('division');
  const input = document.createElement('input');
  input.type = 'checkbox';
  const p = document.createElement('p');
  p.textContent = task.description;
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-ellipsis-v');
  div.appendChild(input);
  div.appendChild(p);
  li.appendChild(div);
  li.appendChild(icon);

  return li;
}

function loadList() {
  const title = document.querySelector('#title');
  const iconA = document.createElement('i');
  iconA.classList.add('fas', 'fa-sync');
  iconA.classList.add('icon-A');
  title.appendChild(iconA);
  const ul = document.querySelector('#list');
  tasks.forEach((task) => ul.appendChild(createItem(task)));
}

export default loadList;