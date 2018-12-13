<style lang="scss" scoped>
@import 'src/user/common/style/variable.scss';
.article-list-wrapper {
  width: 1000px;
  height: 100%;
  background-color: $content-bg-color-base;
  margin:20px auto;
  .article-menu {
    border-bottom: 1px solid $border-color-grey-lightest;
  }
}

.article-menu {
  display: flex;
  align-items: baseline;
  span {
    min-width: 60px;
    max-width: 100px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
    color: $color-gray-base;
    &:hover {
      background: $nav-item-hover-color-default;
    }
    &.active {
      cursor: default;
      font-size: $font-size-h4;
      color: $color-primary;
      background: none;
    }
  }
}
</style>

<template lang="pug">
.article-list-wrapper
  .article-menu
    span.active all
    span one
    span two
    span three
    span.ellipsis longlonglonglong
</template>

<script lang="babel">
export default {
  data() {
    return {
      
    }
  }
}  
</script>