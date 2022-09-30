import { format } from 'date-fns';

export const initialState = {
  name: '',
  category: '',
  icon: '',
  content: '',
  createdAt: `${format(new Date(), 'MMM dd, yyyy')}`,
  dates: null,
};
