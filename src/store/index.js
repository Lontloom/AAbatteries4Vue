import { createStore } from 'vuex'
import postsData from '../assets/posts.json'

export default createStore({
  state: {
    posts: postsData,
  },
  getters: {
    posts: (state) => state.posts,
  },
  mutations: {
    INCREMENT_LIKES(state, postId) {
      const post = state.posts.find((post) => post.id === postId);
      if (post) {
        post.likes += 1;
      }
    },
    
    RESET_ALL_LIKES(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
    },
  },
  actions: {
    likePost({ commit }, postId) {
      commit('INCREMENT_LIKES', postId);
    },

    resetAllLikes({ commit }) {
      commit('RESET_ALL_LIKES');
    },
  },
  modules: {
  }
})
