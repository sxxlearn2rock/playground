<style lang="scss" scoped>
@import 'src/user/common/style/variable.scss';
.article-list-page-wrapper {
  width: 1200px;
  height: 100%;
  margin:20px auto;
  .left-content {
    .article-menu {
      border-bottom: 1px solid $border-color-grey-lightest;
    }
  }
  .right-content {
    height: 300px;
    background: #ddd;
  }
}

.article-menu {
  height: 60px;
  display: flex;
  align-items: baseline;
  background: $content-bg-color-base;
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
  background: $content-bg-color-base;
  .item {
    border-bottom: 1px solid $border-color-grey-lightest;
    $item-head-height: 40px;
    $item-body-height: 40px;
    $item-foot-height: 30px;
    .item-head {
      height: $item-head-height;
      padding-top: 10px;
      &>div {
        height: 100%;
      }
      &>div.first-half {
        span {
          display: inline-block;
          margin-right: 15px;
          height: $item-head-height;
          line-height: $item-head-height;
          color: $color-gray-light;
        }
        span.special-column {
          cursor: pointer;
          color: $color-primary;
        }
      }
      &>div.tags {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        i.fa-tags {
          color: $color-gray-dark;
          margin-right: -5px;
        }
        span.tag {
          margin-left: 15px;
          height: 24px;
          line-height: 24px;
        }
      }

    }
    .item-body {
      height: $item-body-height;
      line-height: 40px;
      // background: #ccc;
      cursor: pointer;
      .title {
        font-size: $font-size-h4;
        font-weight: bold;
      }
    }
    .item-foot {
      height: $item-foot-height;
      span {
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
        i.fa {
          font-size: 14px;
          color: $color-gray-light;
        }
      }
      .view-detail {
        span {
          margin-right: 20px;
        }
        span.thumbs-up {
          &:hover {
            &>i.fa {
              color: $color-primary;
            }
          }
        }
        span.commenting {
          &:hover {
            &>i.fa {
              color: $color-info;
            }
          }
        }
      }
      .oper-btns {
        span {
          margin-left: 15px;
          i.fa {
            font-size: 16px;
          }
        }
        span.star {
          &:hover,&.active {
            &>i.fa {
              color: $color-warning;
            }
          }
        }
        span.share {
          &:hover {
            &>i.fa {
              color: $color-success;
            }
          }
        }
      }
    }
  }
}
</style>


<template lang="pug">
.article-list-page-wrapper.contanier-fluid
  .row
    .left-content.col-xs-9
      .article-menu
        span(v-for='item of category'
        :class='{active: item === curCategory}'
        @click='changeCategory(item)') {{ item }}
      .article-list
        .item(v-for='item of articles'
         @mouseover='showOperBtns(true)'
         @mouseout='showOperBtns(false)')
          .item-head
            .first-half.col-xs-6
              span(v-if='item.column_id > 0').special-column 专栏
              span.pulish-date {{ item.publish_date}}
            .tags.col-xs-6
              i.fa.fa-tags
              span.tag.tag-info(v-for='tag in item.tags') {{ tag.tag_name}}
          .item-body
            .col-xs-12
              span.title {{ item.title }}
          .item-foot
            .view-detail.col-xs-6
              span.thumbs-up: i.fa.fa-thumbs-up  {{ item.thumbs_up_count }}
              span.commenting: i.fa.fa-commenting  {{ item.comment_count }}
            transition(name='fade')
              .oper-btns.col-xs-6.text-right(v-show="isShowOperBtns")
                span.star(title='收藏'
                :class='item.userinfo.is_collected ? "active":""')
                  i.fa.fa-star
                span.share(title='分享'): i.fa.fa-share-alt
    .right-content.col-xs-3

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
      curCategory: 'all',
      isShowOperBtns: false,
      articles: [
        {
          title: 'Vue2+Webpack4从零开始搭建项目（1）：搭建开发环境',
          column_id: 1,
          thumbs_up_count: 123,
          comment_count: 564,
          publish_date: '2018-12-14 00:12:34',
          tags:[
          {
            id: 1,
            tag_name: 'vue'
          },
          {
            id: 2,
            tag_name: 'webpack'
          },
          {
            id: 3,
            tag_name: 'webpack4'
          },
          {
            id: 4,
            tag_name: 'vue2'
          }],
          userinfo: {
            is_collected: true
          }
        },
        {
          title: 'Vue2+Webpack4从零开始搭建项目（2）：搭建开发环境',
          column_id: null,
          thumbs_up_count: 123,
          comment_count: 564,
          publish_date: '2018-12-14 00:12:34',
          tags:[
          {
            id: 1,
            tag_name: 'vue'
          },
          {
            id: 2,
            tag_name: 'webpack'
          }],
          userinfo: {
            is_collected: false
          }
        },
        {
          title: 'Vue2+Webpack4从零开始搭建项目（3）：搭建开发环境',
          column_id: 0,
          thumbs_up_count: 123,
          comment_count: 564,
          publish_date: '2018-12-14 00:12:34',
          tags:[
          {
            id: 3,
            tag_name: 'webpack4'
          },
          {
            id: 4,
            tag_name: 'vue2'
          }],
          userinfo: {
            is_collected: true
          }
        }
      ]
    }
  },
  methods: {
    changeCategory(cate) {
      this.curCategory = cate;
    },
    showOperBtns(flag) {
      this.isShowOperBtns = flag;
    }
  },
  filters: {
    publishDateFilter(val) {
      const regPattDate = /^\d{4,4}-\d\d-\d\d [0-2]\d:[0-5]\d:[0-5]\d$/;
      if(! regPattDate.test(val)) {
        return val;
      }
      // TODO
    }
  }
}  
</script>