import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _9553cca4 = () => interopDefault(import('../pages/jobs.vue' /* webpackChunkName: "pages/jobs" */))
const _4f2234aa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _369337e8 = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _6a38b6b0 = () => interopDefault(import('../pages/_lang/jobs.vue' /* webpackChunkName: "pages/_lang/jobs" */))
const _7a42fa9d = () => interopDefault(import('../pages/_lang/management.vue' /* webpackChunkName: "pages/_lang/management" */))

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
    path: "/jobs",
    component: _9553cca4,
    name: "jobs"
  }, {
    path: "/",
    component: _4f2234aa,
    name: "index"
  }, {
    path: "/:lang",
    component: _369337e8,
    name: "lang"
  }, {
    path: "/:lang/jobs",
    component: _6a38b6b0,
    name: "lang-jobs"
  }, {
    path: "/:lang/management",
    component: _7a42fa9d,
    name: "lang-management"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
