type Action = { type: "ADD_NOTE", payload: string };

export const addNoteAction = (note: string): Action => ({
  type: "ADD_NOTE",
  payload: note
});
