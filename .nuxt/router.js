import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _669089e6 = () => interopDefault(import('../pages/careers.vue' /* webpackChunkName: "pages/careers" */))
const _05d1c3d2 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _3971ac94 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _4f2234aa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _369337e8 = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _c816326a = () => interopDefault(import('../pages/_lang/careers.vue' /* webpackChunkName: "pages/_lang/careers" */))
const _1e3a0fd4 = () => interopDefault(import('../pages/_lang/projects.vue' /* webpackChunkName: "pages/_lang/projects" */))
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
    path: "/careers",
    component: _669089e6,
    name: "careers"
  }, {
    path: "/projects",
    component: _05d1c3d2,
    name: "projects"
  }, {
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
    path: "/:lang/careers",
    component: _c816326a,
    name: "lang-careers"
  }, {
    path: "/:lang/projects",
    component: _1e3a0fd4,
    name: "lang-projects"
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
