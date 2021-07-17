import {
    dragStart, dragEnd, dragOver, dragLeave, drop
} from './dragdrop'

import { updateStatus } from './status';

const listELement = (task) => {
    const element = document.createElement('li');
    element.draggable = true;
    element.classList.add('draggable');
    element.setAttribute('index', task.index);
    element.addEventListener('dragstart', () => { dragStart(element);});
    element.addEventListener('dragover', (event) => { dragOver (element, event);});
    element.addEventListener('dragleave', () => {dragLeave (element);});
    element.addEventListener('drop', () => {drop(element);});
    element.addEventListener('dragend', () => {dragEnd(element);});
    const divE = document.createElement('div');
    divE.classList.add('div-content');
    const par = document.createElement('p');
    par.textContent = task.description;
    par.classList.add('description');
    const check = document.createElement('input');
    check.classList.add('completed');
    check.type = 'checkbox';
    check.check = task.completed;
    check.addEventListener('change', () => {
        updateStatus(parseInt(element.getAttribute('index'),10), check);
    });

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-ellipsis-v');
    divE.appendChild(check);
    divE.appendChild(par);
    element.appendChild(divE);
    element.appendChild(icon);
    element.classList.add('list-element');
    return element;
}

export default listELement;
