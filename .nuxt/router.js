import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _67b5b601 = () => interopDefault(import('../pages/careers.vue' /* webpackChunkName: "pages/careers" */))
const _db465bfa = () => interopDefault(import('../pages/gdpr.vue' /* webpackChunkName: "pages/gdpr" */))
const _3d243492 = () => interopDefault(import('../pages/nda.vue' /* webpackChunkName: "pages/nda" */))
const _6ad9b144 = () => interopDefault(import('../pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _afeee57c = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _638a5c9e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _491ace48 = () => interopDefault(import('../pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _f3004a82 = () => interopDefault(import('../pages/_lang/careers.vue' /* webpackChunkName: "pages/_lang/careers" */))
const _c305d3f6 = () => interopDefault(import('../pages/_lang/gdpr.vue' /* webpackChunkName: "pages/_lang/gdpr" */))
const _2bd7cd16 = () => interopDefault(import('../pages/_lang/nda.vue' /* webpackChunkName: "pages/_lang/nda" */))
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
    path: "/careers",
    component: _67b5b601,
    name: "careers"
  }, {
    path: "/gdpr",
    component: _db465bfa,
    name: "gdpr"
  }, {
    path: "/nda",
    component: _3d243492,
    name: "nda"
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
    component: _f3004a82,
    name: "lang-careers"
  }, {
    path: "/:lang/gdpr",
    component: _c305d3f6,
    name: "lang-gdpr"
  }, {
    path: "/:lang/nda",
    component: _2bd7cd16,
    name: "lang-nda"
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
