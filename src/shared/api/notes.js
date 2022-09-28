import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://631cd9f64fa7d3264cb81275.mockapi.io/notes',
});

export const getNotesList = async () => {
  const { data } = await instance.get('/');
  return data;
};

export const addNote = async res => {
  const { data } = await instance.post('/', res);

  return data;
};

export const removeNote = async id => {
  const { data } = await instance.delete(`/${id}`);

  return data;
};
