<style lang="sass" scoped>
  
</style>

<template lang="pug">
.wrapper
  label(for="flavor") Favorite ice cream flavor?
  input(name="flavor", @change="changed")
</template>

<script lang="babel-loader">
export default {
  data() {
    return {
      flavor: "none"
    }
  },
  methods: {
    changed(event) {
      this.$store.commit('change', event.target.value)
    }
  }
}
</script>
