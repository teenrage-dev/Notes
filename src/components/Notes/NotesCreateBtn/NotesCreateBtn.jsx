import css from './NotesCreateBtn.module.css';
import React from 'react';

export const NotesCreateBtn = ({ onCreate }) => {
  return (
    <div className={css.wrapper}>
      <button className={css.btn} onClick={onCreate}>
        Create Note
      </button>
    </div>
  );
};
