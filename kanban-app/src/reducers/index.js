import { ADD_LIST, ADD_TASK, SET_LISTS, SET_TASKS } from '../actions/types';

const initState = {
  tasks: [
    {
      id: 'task1',
      title: 'Study for steganography exam',
      listId: 'todo',
    },
    {
      id: 'task2',
      title: 'Next chapter in c# book',
      listId: 'doing',
    },
  ],

  lists: [
    {
      id: 'todo',
      name: 'Todo',
    },
    {
      id: 'doing',
      name: 'Doing',
    },
  ],
};

export default function (state = initState, action) {
  switch (action.type) {
    case ADD_LIST:
      return { ...state, lists: [...state.lists, action.payload] };
    case SET_LISTS:
      return { ...state, lists: state.payload };
    case ADD_TASK:
      return { ...state, tasks: [...state.tasks, action.payload] };
    case SET_TASKS:
      return { ...state, tasks: action.payload };
    default:
      return state;
  }
}
