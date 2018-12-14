<style lang="sass" scoped>
  
</style>

<template lang="pug">
.wrapper
  | home
</template>

<script lang="babel">
import { mapActions } from 'vuex';

export default {
  components: {
  },
  methods: {
    ...mapActions([
      'setActiveNavMenu'
    ])
  },
  mounted() {
    this.setActiveNavMenu('home');
  }
}
</script>