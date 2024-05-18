import { ADD_BREAKFAST, SESSION_ID } from './ActionTypes';

export const addItemToBreakfast = (item) => ({
  type: ADD_BREAKFAST,
  payload: item,
});
export const getSessionId = (id) => ({
  type: SESSION_ID,
  payload: id,
});
