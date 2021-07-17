/* eslint-disable import/no-mutable-exports */

let tasks = [
  { description: 'meditate', completed: false, index: 2 },
  { description: 'exercise', completed: false, index: 0 },
  { description: 'code', completed: false, index: 1 },
];

const clearTasks = () => {
  tasks = [];
};

const addTasks = (description, completed, index) => {
  tasks.push({ description, completed, index: parseInt(index, 10) });
};

const store = () => {
  const json = JSON.stringify(tasks);
  localStorage.setItem('tasks', json);
};

export {
  tasks, clearTasks, addTasks, store,
};

/* eslint-enable import/no-mutable-exports */
