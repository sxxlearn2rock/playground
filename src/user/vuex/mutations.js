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
    if (state.activeNote) {
      state.activeNote.favorite = !state.activeNote.favorite;
    }
  },

  DELETE_NOTE(state) {
    if (state.notes.length == 0) return;
    for(let i = 0; i < state.notes.length; i++) {
      if (state.activeNote == state.notes[i]) {
        state.notes.splice(i, 1);
        break;
      }
    }
    if (state.notes.length > 0) {
      state.activeNote = state.notes[0];
    }else {
      state.activeNote = null;
    }
  },

  SET_ACTIVE_NOTE(state, note) {
    state.activeNote = note;
  }
}