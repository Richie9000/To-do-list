import { clearTasks, addTasks, store } from './tasks';

const dragStart = (elm) => {
    elm.classList.add('flying');
};

const dragOver = (elm, e) => {
    e.preventDefault();
    elm.classList.add('dragover');
};

const dragLeave = (elm) => {
    elm.classList.remove('dragover');
};

const drop = (elm) => {
    const flying = document.querySelector('.flying');
    elm.before(flying);
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
    elm.classList.remove('dragover');
};

const dragEnd = (elm) => {
    elm.classList.remove('flying');
};


export {
    dragStart, dragEnd, dragOver, dragLeave, drop,
};