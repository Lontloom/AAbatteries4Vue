import { createStore } from 'vuex'
import postsData from '../assets/posts.json'

export default createStore({
  strict: true,
  state: {
    posts: JSON.parse(localStorage.getItem('posts')) || postsData,
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
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
    
    RESET_ALL_LIKES(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
      localStorage.setItem('posts', JSON.stringify(state.posts));
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
