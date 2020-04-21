import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _afeee57c = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _638a5c9e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _491ace48 = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _62830044 = () => interopDefault(import('../pages/_lang/services.vue' /* webpackChunkName: "pages/_lang/services" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
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
    path: "/:lang/services",
    component: _62830044,
    name: "lang-services"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
