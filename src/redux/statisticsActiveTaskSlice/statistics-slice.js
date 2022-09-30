import { createSlice } from '@reduxjs/toolkit';

const statisticsActiveTaskSLice = createSlice({
  name: 'statistics/task/active',
  initialState: {
    num: 0,
  },
  reducers: {
    addTaskActive: {
      reducer: (store, { payload }) => {
        store.num += payload;
      },
    },
    removeTaskActive: {
      reducer: (store, { payload }) => {
        store.num -= payload;
      },
    },
    removeTasksAllActive: {
      reducer: store => {
        store.num = 0;
      },
    },
  },
});

export const { addTaskActive, removeTaskActive, removeTasksAllActive } =
  statisticsActiveTaskSLice.actions;
export default statisticsActiveTaskSLice.reducer;
