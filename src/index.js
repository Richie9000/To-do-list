import './style.css';
import createList from './modules/frontend/listItems';
import { tasks } from './modules/backend/Tasks';

const run = () => {
  let load = JSON.parse(localStorage.getItem('tasks'));

  if (load == null) {
    load = tasks;
  }

  createList(load);
};

run();