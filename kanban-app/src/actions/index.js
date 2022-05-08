import { ADD_LIST, ADD_TASK, SET_LISTS, SET_TASKS } from './types';

const addList = (list) => {
  return {
    type: ADD_LIST,
    payload: list,
  };
};

const setLists = (lists) => {
  return {
    type: SET_LISTS,
    payload: lists,
  };
};

const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: task,
  };
};

const setTasks = (tasks) => {
  return {
    type: SET_TASKS,
    payload: tasks,
  };
};

export { addList, setLists, addTask, setTasks };
