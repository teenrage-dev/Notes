import css from './NotesList.module.css';
import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { BiArchiveIn } from 'react-icons/bi';
import { TiEdit } from 'react-icons/ti';
import { BiTask } from 'react-icons/bi';
import { FaRegLightbulb } from 'react-icons/fa';
import { FaHeadSideVirus } from 'react-icons/fa';

export const NotesList = ({ notes, onDelete, onEdit, onArchived }) => {
  const getIcon = icon => {
    switch (icon) {
      case 'BiTask':
        return <BiTask className={css.icon} size="1em" />;

      case 'FaRegLightbulb':
        return <FaRegLightbulb className={css.icon} size="1em" />;

      case 'FaHeadSideVirus':
        return <FaHeadSideVirus className={css.icon} size="1em" />;

      default:
        break;
    }
  };

  return (
    <div className={css.wrapper}>
      <ul className={css.list} id="notes-list">
        {notes.map(item => {
          return (
            <li className={`item ${css.item}`} id={item.id} key={item.id}>
              <div className={css.notesContainer}>{getIcon(item.icon)}</div>
              <div className={css.notesItem}>
                <h2 className={css.title}>{item.name}</h2>
              </div>
              <p className={`${css.notesItem} ${css.text}`}>{item.createdAt}</p>
              <p className={`${css.notesItem} ${css.text}`}>
                {item.category.label}
              </p>
              <p className={`${css.notesItem} ${css.text}`}>{item.content}</p>
              <p className={`${css.notesItem} ${css.text}`}>
                {item.dates === null
                  ? ''
                  : `${
                      item.dates.to === ''
                        ? ''
                        : `${item.dates?.from}, ${item.dates?.to}`
                    }`}
              </p>
              <button
                className={`${css.notesItem} ${css.Btn}`}
                onClick={onEdit}
              >
                <TiEdit className={css.itemIcon} size="1em" />
              </button>
              <button
                className={`${css.notesItem} ${css.Btn}`}
                onClick={e => onArchived(e, item)}
              >
                <BiArchiveIn className={css.itemIcon} size="1em" />
              </button>

              <button
                className={`${css.notesItem} ${css.Btn}`}
                onClick={() => onDelete(item.id, item.category.value)}
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
