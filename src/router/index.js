import Vue from 'vue';
import Router from 'vue-router';
import Hello from 'components/Hello';
import Header from 'components/header/header';
import goods from 'components/goods/goods';
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: Hello,
        Header: Header
      }
    },
    {
      path: '/goods',
      components: {
        default: goods
      }
    },
    {
      path: '/ratings',
      components: {
        default: ratings
      }
    },
    {
      path: '/seller',
      components: {
        default: seller
      }
    }
  ]
});
