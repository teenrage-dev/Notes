import { Notes } from './Notes/Notes';
import css from './index.module.css';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  return (
    <div className={css.container}>
      <Notes />
      <Statistics />
    </div>
  );
};
