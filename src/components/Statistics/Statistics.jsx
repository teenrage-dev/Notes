import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from 'redux/notes/notes-slice';
import { addIdeaActive } from 'redux/statisticsActiveIdeaSlice/statistics-slice';
import { addTaskActive } from 'redux/statisticsActiveTaskSlice/statistics-slice';
import { addThoughtActive } from 'redux/statisticsActiveThoughtSlice/statistics-slice';
import { getStatisticksIdea } from 'redux/statisticsIdeaSLice/statistics-selectors';
import {
  removeIdeaArchived,
  removeIdeaArchivedAll,
} from 'redux/statisticsIdeaSLice/statistics-slice';
import { getStatisticksTask } from 'redux/statisticsTaskSLice/statistics-selectors';
import {
  removeTaskArchived,
  removeTaskArchivedAll,
} from 'redux/statisticsTaskSLice/statistics-slice';
import { getStatisticksThought } from 'redux/statisticsThoughtSLice/statistics-selectors';
import {
  removeThoughtArchived,
  removeThoughtArchivedAll,
} from 'redux/statisticsThoughtSLice/statistics-slice';
import { StatisicsIdeaModal } from './StatisicsIdeaModal/StatisicsIdeaModal';
import { StatisicsTaskModal } from './StatisicsTaskModal/StatisicsTaskModal';
import { StatisicsThoughtModal } from './StatisicsThoughtModal/StatisicsThoughtModal';
import css from './Statistics.module.css';
import { StatisticsHeader } from './StatisticsHeader/StatisticsHeader';
import { StatisticsList } from './StatisticsList/StatisticsList';

export const Statistics = () => {
  const [isOpenTask, setIsOpenTask] = useState(false);
  const [isOpenThought, setIsOpenThought] = useState(false);
  const [isOpenIdea, setIsOpenIdea] = useState(false);

  const statisticsTask = useSelector(getStatisticksTask);
  const statisticsThought = useSelector(getStatisticksThought);
  const statisticsIdea = useSelector(getStatisticksIdea);

  const dispatch = useDispatch();

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) {
      setIsOpenTask(false);
      setIsOpenThought(false);
      setIsOpenIdea(false);
    }
  };
  const onCloseModal = e => {
    setIsOpenTask(false);
    setIsOpenThought(false);
    setIsOpenIdea(false);
  };

  const onOpenTask = e => {
    setIsOpenTask(true);
  };

  const onOpenThought = e => {
    setIsOpenThought(true);
  };

  const onOpenIdea = e => {
    setIsOpenIdea(true);
  };

  const onUnArchivedTask = (e, item) => {
    dispatch(addTaskActive(1));
    dispatch(addNote(item));
    dispatch(removeTaskArchived(item.id));
  };
  const onUnArchivedTaskAll = e => {
    dispatch(removeTaskArchivedAll());
    statisticsTask.forEach(item => {
      dispatch(addTaskActive(1));
      dispatch(addNote(item));
    });
  };

  const onUnArchivedThought = (e, item) => {
    dispatch(addThoughtActive(1));
    dispatch(addNote(item));
    dispatch(removeThoughtArchived(item.id));
  };

  const onUnArchivedThoughtAll = e => {
    dispatch(removeThoughtArchivedAll());

    statisticsThought.forEach(item => {
      dispatch(addThoughtActive(1));
      dispatch(addNote(item));
    });
  };

  const onUnArchivedIdea = (e, item) => {
    dispatch(addIdeaActive(1));
    dispatch(addNote(item));
    dispatch(removeIdeaArchived(item.id));
  };

  const onUnArchivedIdeaAll = e => {
    dispatch(removeIdeaArchivedAll());

    statisticsIdea.forEach(item => {
      dispatch(addIdeaActive(1));
      dispatch(addNote(item));
    });
  };

  return (
    <section className={css.section}>
      <StatisticsHeader />
      <StatisticsList
        onOpenTask={onOpenTask}
        onOpenThought={onOpenThought}
        onOpenIdea={onOpenIdea}
      />
      {isOpenTask && (
        <StatisicsTaskModal
          onUnArchived={onUnArchivedTask}
          onBackdropClick={onBackdropClick}
          onCloseModal={onCloseModal}
          onUnArchivedTaskAll={onUnArchivedTaskAll}
        />
      )}
      {isOpenThought && (
        <StatisicsThoughtModal
          onUnArchived={onUnArchivedThought}
          onBackdropClick={onBackdropClick}
          onCloseModal={onCloseModal}
          onUnArchivedThoughtAll={onUnArchivedThoughtAll}
        />
      )}
      {isOpenIdea && (
        <StatisicsIdeaModal
          onUnArchived={onUnArchivedIdea}
          onBackdropClick={onBackdropClick}
          onCloseModal={onCloseModal}
          onUnArchivedIdeaAll={onUnArchivedIdeaAll}
        />
      )}
    </section>
  );
};
