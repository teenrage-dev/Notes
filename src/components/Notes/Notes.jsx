import css from './Notes.module.css';
import { useState } from 'react';
import { NotesHeader } from './NotesHeader/NotesHeader';
import { NotesList } from './NotesList/NotesList';
import { NotesCreateBtn } from './NotesCreateBtn/NotesCreateBtn';
import { CreateNoteModal } from './NotesCreateBtn/CreateNoteModal/CreateNoteModal';
import toast, { Toaster } from 'react-hot-toast';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import {
  addNote,
  editNote,
  removeAllNote,
  removeNote,
} from 'redux/notes/notes-slice';
import { EditNoteModal } from './EditNoteModal/EditNoteModal';
import { getNotes } from 'redux/notes/notes-selectors';

import {
  addTaskActive,
  removeTaskActive,
  removeTasksAllActive,
} from 'redux/statisticsActiveTaskSlice/statistics-slice';
import {
  addThoughtActive,
  removeThoughtActive,
  removeThoughtAllActive,
} from 'redux/statisticsActiveThoughtSlice/statistics-slice';
import {
  addIdeaActive,
  removeIdeaActive,
  removeIdeaAllActive,
} from 'redux/statisticsActiveIdeaSlice/statistics-slice';
import { addTaskArchived } from 'redux/statisticsTaskSLice/statistics-slice';
import { addThoughtArchived } from 'redux/statisticsThoughtSLice/statistics-slice';
import { addIdeaArchived } from 'redux/statisticsIdeaSLice/statistics-slice';

export const Notes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [editItem, setEditItem] = useState('');
  const notes = useSelector(getNotes);

  const dispatch = useDispatch();

  // Switch cycle
  function customSwitch(item) {
    switch (item.category.value) {
      case 'Task':
        dispatch(removeNote(item.id));
        dispatch(addTaskArchived(item));
        dispatch(removeTaskActive(1));
        break;
      case 'Random Thought':
        dispatch(removeNote(item.id));
        dispatch(addThoughtArchived(item));
        dispatch(removeThoughtActive(1));
        break;
      case 'Idea':
        dispatch(removeNote(item.id));
        dispatch(addIdeaArchived(item));
        dispatch(removeIdeaActive(1));
        break;
      default:
        break;
    }
  }

  // Function to create Note
  const onCreate = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const onCloseModal = () => {
    setIsOpen(false);
    setEditIsOpen(false);
  };

  // Function add note to list
  const onSubmit = req => {
    const { category, name, content } = req;
    if (category === '') {
      return toast.error('Category is Requred.', {
        style: {
          border: '1px solid #b6b44a',
          padding: '16px',
          color: '#FFFAEE',
          backgroundColor: '#aaa700b0',
        },
        iconTheme: {
          primary: '#b6574a',
          secondary: '#FFFAEE',
        },
      });
    }
    if (name === '') {
      return toast.error('Name is Requred.', {
        style: {
          border: '1px solid #b6b44a',
          padding: '16px',
          color: '#FFFAEE',
          backgroundColor: '#aaa700b0',
        },
        iconTheme: {
          primary: '#b6574a',
          secondary: '#FFFAEE',
        },
      });
    }

    if (content === '') {
      return toast.error('Content is Requred.', {
        style: {
          border: '1px solid #b6b44a',
          padding: '16px',
          color: '#FFFAEE',
          backgroundColor: '#aaa700b0',
        },
        iconTheme: {
          primary: '#b6574a',
          secondary: '#FFFAEE',
        },
      });
    }

    switch (category.value) {
      case 'Task':
        req.icon = 'BiTask';
        dispatch(addTaskActive(1));
        break;
      case 'Random Thought':
        req.icon = 'FaHeadSideVirus';
        dispatch(addThoughtActive(1));
        break;
      case 'Idea':
        req.icon = 'FaRegLightbulb';
        dispatch(addIdeaActive(1));
        break;

      default:
        break;
    }

    dispatch(addNote(req));
  };

  //Function to archived note
  const onArchivedNote = (e, item) => {
    console.dir(e.currentTarget);
    customSwitch(item);
  };

  //Function to archived All notes
  const onArchivedAllNotes = e => {
    notes.forEach(item => {
      customSwitch(item);
    });
  };

  // Function to delete note
  const onDeleteNote = (id, category) => {
    switch (category) {
      case 'Task':
        dispatch(removeTaskActive(1));
        break;
      case 'Random Thought':
        dispatch(removeThoughtActive(1));
        break;
      case 'Idea':
        dispatch(removeIdeaActive(1));
        break;
      default:
        break;
    }
    dispatch(removeNote(id));
  };

  // Function to delete All Notes
  const onDeleteAllNotes = () => {
    dispatch(removeAllNote());

    dispatch(removeTasksAllActive());
    dispatch(removeThoughtAllActive());
    dispatch(removeIdeaAllActive());
  };

  // Function to edit note
  const onEditNoteOpen = e => {
    const id = e.currentTarget.parentNode.id;
    setEditItem(id);
    setEditIsOpen(true);
  };

  // Function to submit edited form
  const onEditSubmit = req => {
    const { category, name, content } = req;

    if (category === '') {
      return toast.error('Category is Requred.', {
        style: {
          border: '1px solid #b6b44a',
          padding: '16px',
          color: '#FFFAEE',
          backgroundColor: '#aaa700b0',
        },
        iconTheme: {
          primary: '#b6574a',
          secondary: '#FFFAEE',
        },
      });
    }
    if (name === '') {
      return toast.error('Name is Requred.', {
        style: {
          border: '1px solid #b6b44a',
          padding: '16px',
          color: '#FFFAEE',
          backgroundColor: '#aaa700b0',
        },
        iconTheme: {
          primary: '#b6574a',
          secondary: '#FFFAEE',
        },
      });
    }

    if (content === '') {
      return toast.error('Content is Requred.', {
        style: {
          border: '1px solid #b6b44a',
          padding: '16px',
          color: '#FFFAEE',
          backgroundColor: '#aaa700b0',
        },
        iconTheme: {
          primary: '#b6574a',
          secondary: '#FFFAEE',
        },
      });
    }

    switch (category.value) {
      case 'Task':
        req.icon = 'BiTask';
        break;
      case 'Random Thought':
        req.icon = 'FaHeadSideVirus';
        break;
      case 'Idea':
        req.icon = 'FaRegLightbulb';
        break;

      default:
        break;
    }
    dispatch(editNote({ ...req, id: editItem }));
  };

  return (
    <div className={css.wrapper}>
      <NotesHeader
        onDelete={onDeleteAllNotes}
        onArchived={onArchivedAllNotes}
      />

      <NotesList
        notes={notes}
        onDelete={onDeleteNote}
        onEdit={onEditNoteOpen}
        onArchived={onArchivedNote}
      />

      <NotesCreateBtn onCreate={onCreate} />
      {isOpen && (
        <CreateNoteModal onCloseModal={onCloseModal} onSubmit={onSubmit} />
      )}
      {editIsOpen && (
        <EditNoteModal onCloseModal={onCloseModal} onSubmit={onEditSubmit} />
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};
