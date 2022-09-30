import css from './StatisticsHeader.module.css';

import React from 'react';

export const StatisticsHeader = () => {
  return (
    <div className={css.wrapper}>
      <ul className={css.list}>
        <li className={css.item}>
          <div className={css.container}>
            <h2 className={css.title}>Note Category</h2>
          </div>
        </li>
        <li className={css.item}>
          <div className={css.container}>
            <h2 className={css.title}>Active</h2>
          </div>
        </li>
        <li className={css.item}>
          <div className={css.container}>
            <h2 className={css.title}>Archived</h2>
          </div>
        </li>
      </ul>
    </div>
  );
};
