import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home/index';
import Jobs from '@/components/Jobs/index';
import Quality from '@/components/Quality/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    { path: '/', redirect: '/en' },
    {
      path: '/:lang',
      name: 'Home',
      component: Home
    },
    {
      path: '/:lang/jobs',
      name: 'Jobs',
      component: Jobs
    },
    {
      path: '/:lang/quality',
      name: 'Quality',
      component: Quality
    },
    // ------ 404 ------- //
    { path: '*', component: Home }
  ],
});
