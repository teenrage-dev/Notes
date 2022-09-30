import { createSlice } from '@reduxjs/toolkit';

const statisticsActiveThoughtSLice = createSlice({
  name: 'statistics/thought/active',
  initialState: {
    num: 0,
  },
  reducers: {
    addThoughtActive: {
      reducer: (store, { payload }) => {
        store.num += payload;
      },
    },
    removeThoughtActive: {
      reducer: (store, { payload }) => {
        store.num -= payload;
      },
    },
    removeThoughtAllActive: {
      reducer: store => {
        store.num = 0;
      },
    },
  },
});

export const { addThoughtActive, removeThoughtActive, removeThoughtAllActive } =
  statisticsActiveThoughtSLice.actions;
export default statisticsActiveThoughtSLice.reducer;
