<style lang="scss" scoped>
.note-list-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f0f0f0;
  .list-title {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    span.title {
      font-size: 26px;
      color: #666;
    }
  }
  .toggle-btn {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
  }
  .notes-list {
    width: 100%;
    flex-grow: 1;
    .item {
      width: 100%;
      height: 40px;
      line-height: 40px;
      background: #fff;
      padding: 0 5px 0 10px;
      font-size: 14px;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      border-right: 1px solid #f0f0f0;
      &.active {
        cursor: default;
        color: #fff;
        border-right: 1px solid #2377BA;
        background: #2377BA;
      }
    }
  }
  .no-note-tips {
    width: 100%;
    height: 40px;
    line-height: 40px;
    color: #444;
    text-align: center;
    border-top: 1px solid #fff;
  }
}
</style>

<template lang="pug">
.note-list-wrapper
  .list-title
    span.title NOTES
  .toggle-btn
    .btn-group
      button.btn.btn-default(type="button") ALL Notes
      button.btn.btn-default(type="button") Favorites
  .notes-list(v-if='notes.length > 0')
    div.item.ellipsis(v-for='item in notes',
    :class="{active: item == activeNote}",
    @click="setActiveNode(item)") {{ item.title }}
  .no-note-tips(v-else) There is no note.
</template>

<script lang="babel-loader">
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'notes',
      'activeNote'
    ])
  },
  methods: {
    ...mapActions([
      // 将this.setActiveNote(note)映射为this.$store.dispath('setActiveNote', note)
      'setActiveNode'
    ])
  }
} 
</script>
