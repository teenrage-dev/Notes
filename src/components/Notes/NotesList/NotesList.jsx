import css from './NotesList.module.css';
import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BiArchiveIn } from 'react-icons/bi';
import { TiEdit } from 'react-icons/ti';
import { RotatingLines } from 'react-loader-spinner';

export const NotesList = ({ notes, onDelete, pending }) => {
  return (
    <div className={css.wrapper}>
      {pending && (
        <div className={css.Loader}>
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            width="46"
            visible={true}
          />
        </div>
      )}
      <ul className={css.list}>
        {notes.map(item => {
          return (
            <li className={`item ${css.item}`} id={item.id} key={item.id}>
              <div className={css.notesContainer}>{item.icon}</div>
              <div className={css.notesItem}>
                <h2 className={css.title}>{item.name}</h2>
              </div>
              <p className={`${css.notesItem} ${css.text}`}>{item.createdAt}</p>
              <p className={`${css.notesItem} ${css.text}`}>
                {item.category.label}
              </p>
              <p className={`${css.notesItem} ${css.text}`}>{item.content}</p>
              <p className={`${css.notesItem} ${css.text}`}></p>
              <button className={`${css.notesItem} ${css.Btn}`}>
                <TiEdit className={css.itemIcon} size="1em" />
              </button>
              <button className={`${css.notesItem} ${css.Btn}`}>
                <BiArchiveIn className={css.itemIcon} size="1em" />
              </button>
              <button
                className={`${css.notesItem} ${css.Btn}`}
                onClick={onDelete}
              >
                <AiTwotoneDelete className={css.itemIcon} size="1em" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
