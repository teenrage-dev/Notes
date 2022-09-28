import css from './NotesCreateBtn.module.css';
import React from 'react';

export const NotesCreateBtn = ({ onCreate, pending }) => {
  return (
    <div className={css.wrapper}>
      <button className={css.btn} onClick={onCreate} disabled={pending}>
        Create Note
      </button>
    </div>
  );
};
