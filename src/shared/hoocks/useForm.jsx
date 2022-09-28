import { useState } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = e => {
    if (e.target === undefined) {
      return setState(prevState => ({
        ...prevState,
        category: { ...e },
      }));
    }
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setState(prevState => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return { state, setState, handleChange, handleSubmit };
};

export default useForm;
