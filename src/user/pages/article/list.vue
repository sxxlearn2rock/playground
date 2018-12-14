<style lang="scss" scoped>
@import 'src/user/common/style/variable.scss';
.article-list-wrapper {
  width: 1200px;
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
    // min-width: 30px;
    padding: 0 15px;
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

.article-list {
  .item {
    height: 120px;
    border-bottom: 1px solid $border-color-grey-lightest;
    $item-head-height: 30px;
    $item-body-height: 60px;
    $item-foot-height: 30px;
    .item-head {
      height: $item-head-height;
      &>div {
        height: 100%;
      }
      &>div.first-half {
        span {
          display: inline-block;
          margin-right: 15px;
          height: $item-head-height;
          line-height: $item-head-height;
          color: $color-gray-base;
        }
        span.special-column {
          color: $color-primary;
        }
      }
      &>div.tags {
        display: flex;
        align-items: center;
        span.tag {
          height: 24px;
          line-height: 24px;
        }
      }

    }
    .item-body {
      height: 60px;
      background: #ccc;
    }
    .item-foot {
      height: 30px;
      background: #ddd;
    }
  }
}
</style>

<template lang="pug">
.article-list-wrapper
  .article-menu
    span(v-for='item of category'
    :class='{active: item === curCategory}'
    @click='changeCategory(item)') {{ item }}
  .article-list.container-fluid
    .item
      .item-head.row
        .first-half.col-xs-6
          span.special-column 专栏
          span.pulish-date 2018-12-14
        .tags.col-xs-6
          span.tag.tag-info vue
          span vue
          span vue
          span vue
      .item-body.row
      .item-foot.row
</template>

<script lang="babel">
export default {
  data() {
    return {
      category: [
        'all',
        'frontend',
        'backend',
      ],
      curCategory: 'all'
    }
  },
  methods: {
    changeCategory(cate) {
      this.curCategory = cate;
    }
  }
}  
</script>