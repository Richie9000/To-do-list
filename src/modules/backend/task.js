/* eslint-disable import/no-mutable-exports */

let tasks = [];

const loadTasks = () => {
  let load = JSON.parse(localStorage.getItem('tasks'));

  if (load == null) {
    load = [];
  }

  tasks = load;

  return tasks;
};

const clearTasks = () => {
  tasks = [];
};

const addTask = (description, completed, index) => {
  tasks.push({ description, completed, index: parseInt(index, 10) });
};

const store = () => {
  const json = JSON.stringify(tasks);
  localStorage.setItem('tasks', json);
};

const updateTaskCompleted = (index, check) => {
  const taskInTasks = tasks.find((t) => t.index === index);

  taskInTasks.completed = check;

  store();
};

const updateTaskDescription = (index, description) => {
  const taskInTasks = tasks.find((t) => t.index === index);

  taskInTasks.description = description;

  store();
};

const inputCreateTask = (description) => {
  let index = 0;

  if (tasks.length > 0) {
    index = tasks[tasks.length - 1].index + 1;
  }

  addTask(description, false, index);
  store();
};

export {
  tasks,
  clearTasks,
  addTask,
  store,
  updateTaskCompleted,
  inputCreateTask,
  updateTaskDescription,
  loadTasks,
};

/* eslint-enable import/no-mutable-exports */