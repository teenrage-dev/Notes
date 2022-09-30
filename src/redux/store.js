// TODO Add to LocalStorage

import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import notesReducer from './notes/notes-slice';
import statisticsTaskReducer from './statisticsTaskSLice/statistics-slice';
import statisticsThoughtReducer from './statisticsThoughtSLice/statistics-slice';
import statisticsIdeaReducer from './statisticsIdeaSLice/statistics-slice';
import statisticsActiveTaskReducer from './statisticsActiveTaskSlice/statistics-slice';
import statisticsActiveThoughtReducer from './statisticsActiveThoughtSlice/statistics-slice';
import statisticsActiveIdeaReducer from './statisticsActiveIdeaSlice/statistics-slice';

const statisticsReducer = combineReducers({
  statisticsTask: statisticsTaskReducer,
  statisticsThought: statisticsThoughtReducer,
  statisticsIdea: statisticsIdeaReducer,
  statisticsActiveTask: statisticsActiveTaskReducer,
  statisticsActiveThought: statisticsActiveThoughtReducer,
  statisticsActiveIdea: statisticsActiveIdeaReducer,
});

const store = configureStore({
  reducer: { notes: notesReducer, statistics: statisticsReducer },
});

export default store;
