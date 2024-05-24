import { ADD_FOOD, USER_ID } from '../actions/ActionTypes';

const reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_FOOD:
      return [...state, { food: action.payload }];
    case USER_ID:
      return [...state, { uid: action.payload }];
    default:
      return state;
  }
};

export default reducers;
