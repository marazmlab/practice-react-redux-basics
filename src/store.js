import { createStore } from 'redux';

const initialState = {
  message: 'Działa!',
  time: new Date(),
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'getCurrentTime':
      return {
        ...state,
        time: new Date(),
      };
    case 'addUser':
      return {
        ...state,
        users: [
          ...state.users,
          {id: action.payload.id, name: action.payload.name },
        ],
      };
    case 'removeUser':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id),
      }
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;