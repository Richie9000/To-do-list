/* eslint-disable import/no-mutable-exports */

let tasks = [
  { description: 'meditate', completed: false, index: 0 },
  { description: 'exercise', completed: false, index: 1 },
  { description: 'code', completed: false, index: 2 },
];

const clearTasks = () => {
  tasks = [];
};

const addTasks = (description, completed, index) => {
  tasks.push({ description, completed, index: parseInt(index, 10)});
};

const store = () => {
    const jSon =    JSON.stringify(tasks);
    localStorage.setItem('tasks', jSon);
  };
  
  export {tasks, clearTasks, addTasks, store,}; 
  
  /* eslint-disable import/no-mutable-exports */
