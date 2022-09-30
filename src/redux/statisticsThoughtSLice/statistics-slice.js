import { createSlice } from '@reduxjs/toolkit';

const statisticsThoughtSLice = createSlice({
  name: 'statistics/thought/archived',
  initialState: [],
  reducers: {
    addThoughtArchived: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
    },
    removeThoughtArchived: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
    removeThoughtArchivedAll: store => (store = []),
  },
});

export const {
  addThoughtArchived,
  removeThoughtArchived,
  removeThoughtArchivedAll,
} = statisticsThoughtSLice.actions;
export default statisticsThoughtSLice.reducer;
