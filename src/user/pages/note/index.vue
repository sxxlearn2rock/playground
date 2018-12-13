<style lang="scss" scoped>
.note-wrapper {
  height: 100%;
  display: flex;
  flex-direction: row;
  .tool-bar-container {
    width: 50px;
  }
  .notes-list-container {
    width: 360px;
  }
  .editor-container {
    flex-grow: 1;
  }
}
</style>

<template lang="pug">
.note-wrapper
  .tool-bar-container
    tool-bar
  .notes-list-container
    notes-list
  .editor-container
    editor
</template>

<script lang="babel">
import ToolBar from './components/toolBar.vue';
import NotesList from './components/notesList.vue';
import Editor from './components/editor.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    ToolBar,
    NotesList,
    Editor
  },
  mounted() {
    [1, 2, 3].map((n) => {
      console.log(n);
    });
  }
}
</script>