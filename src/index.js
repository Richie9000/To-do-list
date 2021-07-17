import './style.css';
import { loadData }  from './code/status';
import createList from './code/loadlist';

const start = () => {
    loadData();
    createList();
};

start();


