import { ADD_BREAKFAST } from './ActionTypes';

export const addItemToBreakfast = (item) => ({
  type: ADD_BREAKFAST,
  payload: item,
});
