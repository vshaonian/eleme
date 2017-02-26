import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/Hello';
import Header from 'components/header/header';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Hello,
        a: Header
      }
    }
  ]
});
