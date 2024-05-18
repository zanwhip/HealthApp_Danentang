import { ADD_BREAKFAST } from '../actions/ActionTypes';

const reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_BREAKFAST:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default reducers;
