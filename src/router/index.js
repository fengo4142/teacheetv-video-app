import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../view/Home.vue'),
  },{
    path: '/call',
    name: 'Call',
    component: () => import('../view/Call.vue'),
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
