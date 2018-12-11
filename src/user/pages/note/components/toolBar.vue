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
  }
}
</style>

<!-- <template lang="pug">
.tool-bar-wrapper
  .tool-btns
    .icon.icon-plus
      i.fa.fa-plus(@click="addNote")
    .icon.icon-star
      i.fa.fa-star
    .icon.icon-delete
      i.fa.fa-close
</template> -->

<template>
<div class="tool-bar-wrapper">
  <div class="tool-btns">
    <div class="icon icon-plus">
      <i class="fa fa-plus"
         @click="addNote"></i>
    </div>
  </div>
</div>
</template>

<script lang="babel-loader">

import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions([
      // 将 `this.addNote()` 映射为 `this.$store.dispatch('increment')`
      'addNote', 
    ])
  },
  mounted(){
  }
}  
</script>
