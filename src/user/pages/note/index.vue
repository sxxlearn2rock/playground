<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: 100%;
}
</style>

<template lang="pug">
.wrapper
  tool-bar 
</template>

<script lang="babel">
import ToolBar from './components/toolBar.vue';

export default {
  data() {
    return {

    }
  },
  components: {
    ToolBar
  }
}
</script>