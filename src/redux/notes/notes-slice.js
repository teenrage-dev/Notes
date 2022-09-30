import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { format } from 'date-fns';

const notesSlice = createSlice({
  name: 'notes',
  initialState: [],
  reducers: {
    addNote: {
      reducer: (store, { payload }) => {
        store.push(payload);
      },
      prepare: data => {
        return {
          payload: {
            ...data,
            id: nanoid(),
          },
        };
      },
    },
    removeNote: (store, { payload }) =>
      store.filter(({ id }) => id !== payload),
    removeAllNote: store => (store = []),
    editNote: (store, { payload }) => {
      store.forEach(item => {
        if (item.id === payload.id) {
          item.name = payload.name;
          item.category = payload.category;
          item.content = payload.content;
          if (payload.dates !== '') {
            item.dates = {
              from: format(new Date(item.createdAt), 'd/M/yyyy'),
              to: format(new Date(payload.dates), 'd/M/yyyy'),
            };
          }
          item.icon = payload.icon;
        }
      });
    },
  },
});

export const { addNote, removeNote, removeAllNote, editNote } =
  notesSlice.actions;
export default notesSlice.reducer;
