export default {
  // mudule的状态被封装在命名空间中，所以此时的state并非全局state，而是基于该module的context
  GET_ARTICLES(state, queryBody) {
    state.articles = [];
  }
}