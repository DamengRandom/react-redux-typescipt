import React from 'react';
import NewNoteInput from './NewNoteInput';
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './noteReducer';
import { addNoteAction } from './actions';

function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    state => state.notes
  );

  const dispatch = useDispatch();

  const addingNote = (note: string) => {
    dispatch(addNoteAction(note));
  }

  return (
    <>
      <NewNoteInput addNote={addingNote} />
      <hr />
      <ul>
        {notes.map((note, index) =>
          <li key={`note-${index}`}>{note}</li>)}
      </ul>
    </>
  );
}

export default App;
