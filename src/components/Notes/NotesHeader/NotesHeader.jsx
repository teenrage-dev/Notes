import css from './NotesHeader.module.css';
import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BiArchiveIn } from 'react-icons/bi';

export const NotesHeader = ({ onDelete, onArchived }) => {
  return (
    <header className={css.section}>
      <div className={css.container}>
        <div className={css.headerContainer}>
          <ul className={css.headerList}>
            <li className={css.headerItem}>
              <div className={css.itemContainer}>
                <h2 className={css.itemTitle}>Name</h2>
              </div>
            </li>
            <li className={css.headerItem}>
              <div className={css.itemContainer}>
                <h2 className={css.itemTitle}>Created</h2>
              </div>
            </li>
            <li className={css.headerItem}>
              <div className={css.itemContainer}>
                <h2 className={css.itemTitle}>Category</h2>
              </div>
            </li>
            <li className={css.headerItem}>
              <div className={css.itemContainer}>
                <h2 className={css.itemTitle}>Content</h2>
              </div>
            </li>
            <li className={css.headerItem}>
              <div className={css.itemContainer}>
                <h2 className={css.itemTitle}>Dates</h2>
              </div>
            </li>
            <li className={css.headerItem}>
              <div className={css.itemContainer}>
                <button className={css.itemBtn} onClick={onArchived}>
                  <BiArchiveIn className={css.itemIcon} />
                </button>
              </div>
            </li>
            <li className={css.headerItem}>
              <div className={css.itemContainer}>
                <button className={css.itemBtn} onClick={onDelete}>
                  <AiTwotoneDelete className={css.itemIcon} size="1em" />
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
