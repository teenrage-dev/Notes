import css from './Notes.module.css';
import React, { useEffect, useState } from 'react';
import { NotesHeader } from './NotesHeader/NotesHeader';
import { NotesList } from './NotesList/NotesList';
import { NotesCreateBtn } from './NotesCreateBtn/NotesCreateBtn';
import { CreateNoteModal } from './NotesCreateBtn/CreateNoteModal/CreateNoteModal';
import { addNote, getNotesList, removeNote } from 'shared/api/notes';

export const Notes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [pending, setPending] = useState(false);
  const [rejected, setRejected] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setPending(true);
    const data = await getNotesList();
    setPending(false);
    setNotes(data);
    console.log(data);
  }

  // Function to create Note
  const onCreate = () => {
    setIsOpen(true);
  };

  // Function to close the modal
  const onCloseModal = () => {
    setIsOpen(false);
  };

  // Function add note to list
  const onSubmit = async req => {
    setPending(true);
    setIsOpen(false);
    const data = await addNote(req);
    setPending(false);

    console.log(data);
    setNotes(prevState => [...prevState, { ...data }]);
  };

  const onDeleteNote = async e => {
    setPending(true);
    const li = e.target.parentNode.parentNode.parentNode;
    const data = await removeNote(li.id);
    li.remove();
    setPending(false);
    console.log(data);
  };

  return (
    <div className={css.wrapper}>
      <NotesHeader />

      <NotesList notes={notes} onDelete={onDeleteNote} pending={pending} />

      <NotesCreateBtn onCreate={onCreate} pending={pending} />
      {isOpen && (
        <CreateNoteModal onCloseModal={onCloseModal} onSubmit={onSubmit} />
      )}
    </div>
  );
};
