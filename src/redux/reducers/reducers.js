import { ADD_BREAKFAST, SESSION_ID } from '../actions/ActionTypes';

const reducers = (state = [], action) => {
  switch (action.type) {
    case ADD_BREAKFAST:
      return [...state, action.payload];
    case SESSION_ID: 
    return [...state, action.payload];
    default:
      return state;
    
  }
};



export default reducers;
