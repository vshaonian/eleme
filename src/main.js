// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResouce from 'vue-resource';
import './common/stylus/index.styl';

/* eslint-disable no-new */
Vue.use(VueResouce);

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
router.push('/goods');
