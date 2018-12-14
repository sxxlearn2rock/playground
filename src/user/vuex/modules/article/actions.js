export default {
  getArticles({ commit }, queryBody) {
    commit('GET_ARTICLES', queryBody);
  }
}