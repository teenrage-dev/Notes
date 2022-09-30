import { createSlice } from '@reduxjs/toolkit';

const statisticsActiveIdeaSLice = createSlice({
  name: 'statistics/idea/active',
  initialState: {
    num: 0,
  },
  reducers: {
    addIdeaActive: {
      reducer: (store, { payload }) => {
        store.num += payload;
      },
    },
    removeIdeaActive: {
      reducer: (store, { payload }) => {
        store.num -= payload;
      },
    },
    removeIdeaAllActive: {
      reducer: store => {
        store.num = 0;
      },
    },
  },
});

export const { addIdeaActive, removeIdeaActive, removeIdeaAllActive } =
  statisticsActiveIdeaSLice.actions;
export default statisticsActiveIdeaSLice.reducer;
