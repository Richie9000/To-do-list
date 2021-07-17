import listELement from './listElements';
import listElement from './listElements';
import { data } from './status';

export default function createList() {
  const todoList = document.getElementById('list');
  const firstElement = document.createElement('li');
  const text = document.createElement('p');
  text.innerHTML = "Today's to dos";
  text.classList.add('title-text');
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-sync-alt');
  firstElement.appendChild(text);
  firstElement.appendChild(icon);
  const searchE = document.createElement('li');
  const textS = document.createElement('input');
  textS.placeholder = 'Add to list';
  textS.classList.add('text-input');
  searchE.appendChild(textS);
  const callE = document.createElement('li');
  const btn = document.createElement('button');
  btn.innerText = 'Clear list';
  btn.classList.add('btn-clear');
  callE.appendChild(btn);
  todoList.appendChild(firstElement);
  todoList.appendChild(searchE);
  
  data.forEach((task) => {
    const element = listELement(task);
    todoList.appendChild(element);
  });
  todoList.appendChild(callE);
}

