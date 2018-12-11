<style lang="scss" scoped>
.tool-bar-wrapper {
  width: 100%;; 
  height: 100%;
  background: #2D414E;
}
.tool-btns {
  width: 100%;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 100%;
    i.fa {
      font-size: 26px;
      color: #676B6E;
      &:hover {
        cursor: pointer;
        color: lighten(#676B6E, 30%);
      }
    }
    i.fa-plus {
      &:active {
        color: #4285F4;
      }
    }
    i.fa-star{
      &.active {
        color: #FBBC05;
      }
    }
    i.fa-close {
      &:active {
        color: #EA4335;
      }
    }
  }
}
</style>

<template lang="pug">
.tool-bar-wrapper
  .tool-btns
    .icon.icon-plus
      i.fa.fa-plus(@click="addNote")
    .icon.icon-star
      i.fa.fa-star(@click="toggleFavorite"
      :class="{active: activeNote && activeNote.favorite}")
    .icon.icon-delete
      i.fa.fa-close(@click="deleteNote")
</template>

<script lang="babel-loader">

import { mapActions, mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'activeNote'
    ])
  },
  methods: {
    ...mapActions([
      // 将 `this.addNote()` 映射为 `this.$store.dispatch('increment')`
      'addNote',
      'deleteNote',
      'toggleFavorite'
    ])
  },
  mounted(){
  }
}  
</script>
