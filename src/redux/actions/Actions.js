import { ADD_FOOD, USER_ID } from './ActionTypes';

export const addItemToFood = (item) => ({
  type: ADD_FOOD,
  payload: item,
});
export const getUserId = (id) => ({
  type: USER_ID,
  payload: id,
});
