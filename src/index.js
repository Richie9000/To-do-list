import './style.css';
import createList from './modules/frontend/listItems';
import { loadTasks } from './modules/backend/Tasks';

const run = () => {
createList(loadTasks());
};

run();