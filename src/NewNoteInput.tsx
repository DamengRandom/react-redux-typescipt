import React from "react";

interface NewNoteInputProps {
  addNote(note: string): void;
}

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote: addingNote }) => {
  const [note, setNote] = React.useState("");

  const updateNoteContent = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setNote(event.target.value);
  };

  const onAddNote = () => {
    addingNote(note);
    setNote("");
  };

  return (
    <div>
      <input
        type="text"
        name="note"
        placeholder="Note"
        value={note}
        onChange={updateNoteContent}
      />
      <button onClick={onAddNote}>Add note</button>
    </div>
  );
};

export default NewNoteInput;
