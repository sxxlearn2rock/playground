import Home from '../pages/home/index.vue';
import Note from '../pages/note/index.vue';

import Article from '../pages/article/index.vue';
import ArticleList from '../pages/article/list.vue'
import ArticleContent from '../pages/article/content.vue'

export default [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/note',
    name: 'note',
    component: Note
  },
  {
    path: '/article',
    name: 'article',
    component: Article,
    children: [
      {
        path: 'list',
        component: ArticleList
      },
      {
        path: 'content/:id(\\d{1,5})',
        component: ArticleContent
      }
    ]
  },
]