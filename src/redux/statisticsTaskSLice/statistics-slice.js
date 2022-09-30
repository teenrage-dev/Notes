import { createSlice } from '@reduxjs/toolkit';

const statisticsTaskSLice = createSlice({
  name: 'statistics/task/archived',
  initialState: [],
  reducers: {
    addTaskArchived: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
    },
    removeTaskArchived: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
    removeTaskArchivedAll: store => (store = []),
  },
});

export const { addTaskArchived, removeTaskArchived, removeTaskArchivedAll } =
  statisticsTaskSLice.actions;
export default statisticsTaskSLice.reducer;
