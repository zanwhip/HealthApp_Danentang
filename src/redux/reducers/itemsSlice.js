import { createSlice } from '@reduxjs/toolkit';
import { ADD_BREAKFAST } from '../actions/ActionTypes';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ADD_BREAKFAST, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default itemsSlice.reducer;
