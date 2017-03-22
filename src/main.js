// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueRouter from './router';
import goods from './components/goods/goods';
import ratings from './components/ratings/ratings';
import seller from './components/seller/seller';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});

Vue.use(VueRouter);

const routes = [
  {path: '/goods', component: goods},
  {path: '/ratings', component: ratings},
  {path: 'seller', component: seller}
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  router
}).$mount('#app');
export default app;
