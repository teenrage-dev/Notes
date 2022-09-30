import React from 'react';
import css from './StatisticsList.module.css';

import { BiTask } from 'react-icons/bi';
import { FaRegLightbulb } from 'react-icons/fa';
import { FaHeadSideVirus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getStatisticksTask } from 'redux/statisticsTaskSLice/statistics-selectors';
import { getStatisticksThought } from 'redux/statisticsThoughtSLice/statistics-selectors';
import { getStatisticksIdea } from 'redux/statisticsIdeaSLice/statistics-selectors';
import { getStatisticksActiveTask } from 'redux/statisticsActiveTaskSlice/statistics-selectors';
import { getStatisticksActiveThought } from 'redux/statisticsActiveThoughtSlice/statistics-selectors';
import { getStatisticksActiveIdea } from 'redux/statisticsActiveIdeaSlice/statistics-selectors';

export const StatisticsList = ({ onOpenTask, onOpenThought, onOpenIdea }) => {
  const statisticsTask = useSelector(getStatisticksTask);
  const statisticsThought = useSelector(getStatisticksThought);
  const statisticsIdea = useSelector(getStatisticksIdea);

  const statisticsActiveTask = useSelector(getStatisticksActiveTask);
  const statisticsActiveThought = useSelector(getStatisticksActiveThought);
  const statisticsActiveIdea = useSelector(getStatisticksActiveIdea);

  return (
    <ul className="list statistics-list">
      <li className={css.itemContainer}>
        <div className={css.itemIconBox}>
          <BiTask className={css.icon} size="1em" />
        </div>
        <div className={`${css.item} ${css.itemTitleBox}`}>
          <h2 className={css.title}>Task</h2>
        </div>
        <div className={css.item}>
          <button className={css.btn}>{statisticsActiveTask.num}</button>
        </div>
        <div className={css.item}>
          <button
            className={`${css.btn} ${css.archivedBtn}`}
            onClick={onOpenTask}
          >
            {statisticsTask.length}
          </button>
        </div>
      </li>
      <li className={css.itemContainer}>
        <div className={css.itemIconBox}>
          <FaHeadSideVirus className={css.icon} size="1em" />
        </div>
        <div className={`${css.item} ${css.itemTitleBox}`}>
          <h2 className={css.title}>Random Thought</h2>
        </div>
        <div className={css.item}>
          <button className={css.btn}>{statisticsActiveThought.num}</button>
        </div>
        <div className={css.item}>
          <button
            className={`${css.btn} ${css.archivedBtn}`}
            onClick={onOpenThought}
          >
            {statisticsThought.length}
          </button>
        </div>
      </li>
      <li className={css.itemContainer}>
        <div className={css.itemIconBox}>
          <FaRegLightbulb className={css.icon} size="1em" />
        </div>
        <div className={`${css.item} ${css.itemTitleBox}`}>
          <h2 className={css.title}>Idea</h2>
        </div>
        <div className={css.item}>
          <button className={css.btn}>{statisticsActiveIdea.num}</button>
        </div>
        <div className={css.item}>
          <button
            className={`${css.btn} ${css.archivedBtn}`}
            onClick={onOpenIdea}
          >
            {statisticsIdea.length}
          </button>
        </div>
      </li>
    </ul>
  );
};
