import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6ad9b144 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _afeee57c = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _638a5c9e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _491ace48 = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _f5e4cb40 = () => interopDefault(import('../pages/_lang/projects.vue' /* webpackChunkName: "pages/_lang/projects" */))
const _62830044 = () => interopDefault(import('../pages/_lang/services.vue' /* webpackChunkName: "pages/_lang/services" */))

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
    path: "/projects",
    component: _6ad9b144,
    name: "projects"
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
    path: "/:lang/projects",
    component: _f5e4cb40,
    name: "lang-projects"
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
