import css from './EditNoteModal.module.css';

import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import useForm from 'shared/hoocks/useForm';
import { initialState } from './initialState';
import Select from 'react-select';
import { options } from './options';

const modalRoot = document.querySelector('#modal-edit');

export const EditNoteModal = ({ onCloseModal, onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onCloseModal();
    }
  };
  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onCloseModal();
    }
  };

  const { name, category, content, dates } = state;

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>
        <button type="button" className={css.closeBtn} onClick={onCloseModal}>
          <RiCloseFill className={css.closeIcon} size="1em" />
        </button>
        <form action="" onSubmit={handleSubmit} className={css.form}>
          <label className={css.labelText} htmlFor="name">
            Name
          </label>
          <input
            className={css.input}
            type="text"
            name="name"
            onChange={handleChange}
            value={name}
            placeholder="Write note name"
          />
          <label className={css.labelText} htmlFor="category">
            Category
          </label>
          <Select
            options={options}
            name="category"
            defaultValue="Task"
            value={category}
            onChange={handleChange}
          />

          <label className={css.labelText} htmlFor="content">
            Content
          </label>
          <textarea
            name="content"
            className={css.content}
            placeholder="Write note content ..."
            onChange={handleChange}
            value={content}
          ></textarea>
          <label className={css.labelText} htmlFor="dates">
            Dates
          </label>
          <input
            type="date"
            className={css.input}
            name="dates"
            value={dates}
            onChange={handleChange}
          />
          <div className={css.container}>
            <button type="submit" className={css.sendBtn}>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>,
    modalRoot
  );
};
