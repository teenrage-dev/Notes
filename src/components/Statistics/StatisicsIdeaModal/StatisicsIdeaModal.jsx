import css from './StatisicsIdeaModal.module.css';

import React, { useEffect } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import { BiArchiveIn, BiArchiveOut } from 'react-icons/bi';
import { FaRegLightbulb } from 'react-icons/fa';
import { getStatisticksIdea } from 'redux/statisticsIdeaSLice/statistics-selectors';
import { useSelector } from 'react-redux';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-ideas');

export const StatisicsIdeaModal = ({
  onBackdropClick,
  onCloseModal,
  onUnArchived,
  onUnArchivedIdeaAll,
}) => {
  const notes = useSelector(getStatisticksIdea);

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

  return createPortal(
    <div className={css.overlay} onClick={onBackdropClick}>
      <div className={css.wrapper}>
        <button type="button" className={css.closeBtn} onClick={onCloseModal}>
          <RiCloseFill className={css.closeIcon} size="1em" />
        </button>
        <div className={css.headerContainer}>
          <ul className={css.headerList}>
            <li className={css.headerItem}>
              <div>
                <h2 className={css.headerTitle}>Name</h2>
              </div>
            </li>
            <li className={css.headerItem}>
              <div>
                <h2 className={css.headerTitle}>Created</h2>
              </div>
            </li>
            <li className={css.headerItem}>
              <div>
                <h2 className={css.headerTitle}>Category</h2>
              </div>
            </li>
            <li className={css.headerItem}>
              <div>
                <h2 className={css.headerTitle}>Content</h2>
              </div>
            </li>
            <li className={css.headerItem}>
              <div>
                <h2 className={css.headerTitle}>Dates</h2>
              </div>
            </li>
            <li className={css.headerItem}>
              <div>
                <button className={css.headerBtn} onClick={onUnArchivedIdeaAll}>
                  <BiArchiveOut
                    className={`${css.itemIcon} ${css.unArchivedIcon}`}
                    size="1em"
                  />
                </button>
              </div>
            </li>
          </ul>
        </div>
        <ul className={css.statisticsList}>
          {notes?.map(item => {
            return (
              <li className={`item ${css.item}`} id={item.id} key={item.id}>
                <div className={css.notesContainer}>
                  <FaRegLightbulb className={css.icon} size="1em" />
                </div>
                <div className={css.notesItem}>
                  <h2 className={css.title}>{item.name}</h2>
                </div>
                <p className={`${css.notesItem} ${css.text}`}>
                  {item.createdAt}
                </p>
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
                  onClick={e => onUnArchived(e, item)}
                >
                  <BiArchiveIn className={css.itemIcon} size="1em" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>,
    modalRoot
  );
};
