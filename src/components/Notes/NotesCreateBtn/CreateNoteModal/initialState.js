import { format } from 'date-fns';

export const initialState = {
  name: '',
  category: '',
  content: '',
  createdAt: `${format(new Date(), 'MMM dd, yyyy')}`,
};
