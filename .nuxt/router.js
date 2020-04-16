import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0fe1b98c = () => interopDefault(import('../pages/jobs.vue' /* webpackChunkName: "pages/jobs" */))
const _afeee57c = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _638a5c9e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _491ace48 = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _042f673c = () => interopDefault(import('../pages/_lang/jobs.vue' /* webpackChunkName: "pages/_lang/jobs" */))
const _7a5e1229 = () => interopDefault(import('../pages/_lang/management.vue' /* webpackChunkName: "pages/_lang/management" */))
const _62830044 = () => interopDefault(import('../pages/_lang/services.vue' /* webpackChunkName: "pages/_lang/services" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/jobs",
    component: _0fe1b98c,
    name: "jobs"
  }, {
    path: "/services",
    component: _afeee57c,
    name: "services"
  }, {
    path: "/",
    component: _638a5c9e,
    name: "index"
  }, {
    path: "/:lang",
    component: _491ace48,
    name: "lang"
  }, {
    path: "/:lang/jobs",
    component: _042f673c,
    name: "lang-jobs"
  }, {
    path: "/:lang/management",
    component: _7a5e1229,
    name: "lang-management"
  }, {
    path: "/:lang/services",
    component: _62830044,
    name: "lang-services"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
