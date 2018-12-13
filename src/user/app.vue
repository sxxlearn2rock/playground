<style lang="scss">
@import './common/style/common.scss';
html,body,.app-wrapper {
  height: 100%;
  background: #F0F0F0;
}
</style>

<template lang="pug">
.app-wrapper
  page-head
  router-view
</template>

<script lang="babel">
import PageHead from './common/component/header.vue';

export default {
  components: {
    PageHead
  }
}
</script>