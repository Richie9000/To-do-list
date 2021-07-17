import { clearData, addData, saveData } from './status';

const dragStart = (elm) => {
    elm.classList.add('drag');
};

const dragEnd = (elm) => {
    elm.classList.remove('drag');
};

const dragOver = (elm, event) => {
    event.preventDefault();
    elm.classList.add('over-element');
}

const dragLeave = (elm) => {
    elm.classList.remove('over-element');
};

const orderData = () => {
    const dragE = document.querySelectorAll('.draggable');
    let i = 0;
    dragE.forEach((element) => {
        element.setAttribute('index', i);
        i += 1;
    });
};

const updateData = () => {
    const dragE = document.querySelectorAll('.draggable');
    dragE.forEach((element) => {
        const description = element.getElementsByClassName('description')[0].textContent;
        const check = element.getElementsByClassName('completed')[0].checked;
        const index = parseInt(element.getAttribute('index'), 10);
        const newTask = {
            description,
            check,
            index,
        };
        addData(newTask);
    });
};

const drop = (elm) => {
    elm.classList.remove('over-element');
    const elmDragged = document.querySelector('drag');
    elm.before(elmDragged);
    orderData();
    clearData();
    updateData();
    saveData();
};

export {
    dragStart, dragEnd, dragOver, dragLeave, drop,
};