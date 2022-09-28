import { Notes } from './Notes/Notes';
import css from './index.module.css';

export const App = () => {
  return (
    <div className={css.container}>
      <Notes />
    </div>
  );
};
