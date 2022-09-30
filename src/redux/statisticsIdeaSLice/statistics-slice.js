import { createSlice } from '@reduxjs/toolkit';

const statisticsIdeaSLice = createSlice({
  name: 'statistics/idea/archived',
  initialState: [],
  reducers: {
    addIdeaArchived: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
    },
    removeIdeaArchived: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
    removeIdeaArchivedAll: store => (store = []),
  },
});

export const { addIdeaArchived, removeIdeaArchived, removeIdeaArchivedAll } =
  statisticsIdeaSLice.actions;
export default statisticsIdeaSLice.reducer;
