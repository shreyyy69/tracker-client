const GET_TASKS = 'GET_TASKS';
const CREATE_TASK = 'CREATE_TASK';
const DELETE_TASK = 'DELETE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';

let objectIndex = {};
let updateElement = {};
let updatedState = [];

export default function taskReducer(state = [], action) {
  switch (action.type) {
    case GET_TASKS:
      return action.payload;

    case CREATE_TASK:
      return [...state, action.data];

    case DELETE_TASK:
      return state.filter(
        el => el.id !== action.payload.id,
      );

    case UPDATE_TASK:
      objectIndex = state.findIndex(
        obj => obj.id === action.payload.id,
      );

      updateElement = {
        ...state[objectIndex],
        done: action.payload.done,
      };

      updatedState = [
        ...state.slice(0, objectIndex),
        updateElement,
        ...state.slice(objectIndex + 1),
      ];

      return updatedState;
    default:
      return state;
  }
}
