import { format } from 'date-fns';

// let fromDay = null;
// let toDay = null;

export const initialState = {
  name: '',
  category: '',
  icon: '',
  content: '',
  createdAt: '',
  dates: '',
};

// if (initialState.dates !== '') {
//   fromDay = format(new Date(), 'd/M/yyyy');
//   toDay = format(new Date(note.dates), 'd/M/yyyy');
// } else {
//   fromDay = '';
//   toDay = '';
// }
