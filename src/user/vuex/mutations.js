export default {
  ADD_NOTE(state) {
    const newNote = {
      title: 'new note',
      favorite: false,
      text: ''
    };
    state.notes.push(newNote);
    state.activeNote = newNote;
  },

  EDIT_NOTE(state, text) {
    state.activeNote.text = text;
  },

  TOGGLE_FAVORITE(state) {
    state.activeNote.favorite = !state.activeNote.favorite;
  },

  DELETE_NOTE(state) {
    state.notes.$remove(state.activeNote);
    state.notes.activeNote = state.notes[0];
  },

  SET_ACTIVE_NOTE(state, note) {
    state.activeNote = note;
  }
}