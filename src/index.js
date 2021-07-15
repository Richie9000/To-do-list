import _ from 'lodash';
import css from "./style.css";

const tasks = [
    { description: 'meditate', completed: false, index: 0 },
    { description: 'exercise', completed: false, index: 1 },
    { description: 'code', completed: false, index: 2 },
  ];

  const listUl = document.getElementById('list');

  function loadList() {
    for (let i = 1; i <= list.length; i += 1) {
      for (let j = 0; j < list.length; j += 1) {
        if (list[j].index === i) {
          const toDoLi = document.createElement('li');
          toDoLi.className = 'item';
          toDoLi.innerHTML = `
                    <div class="check-div">
                    <input id="input-${list[j].index}" type="checkbox"/><label for="input-${list[j].index}" >${list[j].description}</label></div>
                    <button><img src="img/three-dots.svg" alt="" width="15" /></button>`;
          listUl.appendChild(toDoLi);
          listUl.appendChild(document.createElement('hr'));
        }
      }
    }
  }
  
  document.addEventListener('DOMContentLoaded', loadList);
  