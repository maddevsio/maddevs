import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3971ac94 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _4f2234aa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _369337e8 = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _08a11490 = () => interopDefault(import('../pages/_lang/services.vue' /* webpackChunkName: "pages/_lang/services" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/services",
    component: _3971ac94,
    name: "services"
  }, {
    path: "/",
    component: _4f2234aa,
    name: "index"
  }, {
    path: "/:lang",
    component: _369337e8,
    name: "lang"
  }, {
    path: "/:lang/services",
    component: _08a11490,
    name: "lang-services"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
