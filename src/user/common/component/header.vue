<style lang="scss" scoped>
.header-wrapper {
  width: 100%;
  // height: 80px;
  background: #aaa;
  .container {
    width: 1200px;
    margin: 0 auto;
    ul.nav li {
      cursor: pointer;
    }
  }
}
</style>

<template lang="pug">
.header-wrapper
  nav.navbar.navbar-default
    .container
      .navbar-header
        button.navbar-toggle.collapsed(type='button' 
        data-toggle="collapse" 
        data-target="#page-head-navbar-menu"
        aria-expanded="false")
          span.sr-only Toggle navigation
          span.icon-bar
          span.icon-bar
          span.icon-bar
        a.navbar-brand(href='#') SAMSANG
      #page-head-navbar-menu.collapse.navbar-collapse
        ul.nav.navbar-nav
          li(v-for='item in menus' 
          :class='{active: activeNavMenu==item.menu}')
            router-link(:to='item.path') {{ item.menu }}

</template>

<script lang="babel">
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      menus: [
        {
          menu: 'home',
          path: '/'
        },
        {
          menu: 'article',
          path: '/article/list'
        }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'activeNavMenu'
    ])
  },
  mounted() {

  }
} 
</script>