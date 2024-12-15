import { createRouter, createWebHashHistory } from 'vue-router';
import PostsView from '@/views/PostsView.vue';
import SignupView from '@/views/SignupView.vue';
import LoginView from '../views/LoginView.vue';
import ContactUsView from '@/views/ContactUsView.vue';
import EditPostView from '@/views/EditPostView.vue';
import AddPostView from '@/views/AddPostView.vue'; 

import authenticate from '../authenticate';
const routes = [
  {
    path: '/',
    name: 'home',
    component: PostsView,
    beforeEnter: async (to, from, next) => {
      let auth = await authenticate.authenticated();
      if (!auth) {
        next("/login");
      } else {
        next();
      }
    }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactUsView, 
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPostView, 
    beforeEnter: async (to, from, next) => {
      let auth = await authenticate.authenticated();
      if (!auth) {
        next("/login");
      } else {
        next();
      }
    }
  },

  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPostView,
    beforeEnter: async (to, from, next) => {
      let auth = await authenticate.authenticated();
      if (!auth) {
        next("/login");
      } else {
        next();
      }
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;