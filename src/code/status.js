let data = [{ description: 'meditate', completed : false, index : 0}, 
{ description: 'exercise', completed : false, index : 1}, 
{ description: 'code', completed : false, index : 2}];

const saveData = () => {
  const jSon = JSON.stringify('data');
  localStorage.setItem('data', jSon);
};

const updateStatus = (index, element) => {
  const findObj = data.find((obj) => obj.index === index);
  findObj.completed = element.checked;
  saveData();
}

const clearData = () => {
  data = [];
}; 

const addData = (obj) => {
  data.push(obj);
}

const loadData = () => {
  const localData = localStorage.getItem('data');
  data = localData === null ? data : JSON.parse(localData);
};

export {
  data, saveData, clearData, addData, updateStatus, loadData,
};