<style lang="scss" scoped>
  
</style>

<template lang="pug">
  router-view
</template>

<script lang="babel">
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'setActiveNavMenu'
    ])
  },
  mounted() {
    this.setActiveNavMenu('article');
  }
}
</script>