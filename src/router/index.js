import Vue from 'vue'
import VueRouter from 'vue-router'
import Topics from '../components/Topics.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Topics',
    component: Topics
  }
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
