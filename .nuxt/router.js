import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0075eb53 = () => interopDefault(import('../client/pages/careers.vue' /* webpackChunkName: "pages/careers" */))
const _310eedf1 = () => interopDefault(import('../client/pages/gdpr.vue' /* webpackChunkName: "pages/gdpr" */))
const _7b319409 = () => interopDefault(import('../client/pages/nda.vue' /* webpackChunkName: "pages/nda" */))
const _e8baf6b4 = () => interopDefault(import('../client/pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _49d99c4c = () => interopDefault(import('../client/pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _274f0230 = () => interopDefault(import('../client/pages/services.vue' /* webpackChunkName: "pages/services" */))
const _c9c88320 = () => interopDefault(import('../client/pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0393d52e = () => interopDefault(import('../client/pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _2b434a91 = () => interopDefault(import('../client/pages/_lang/careers.vue' /* webpackChunkName: "pages/_lang/careers" */))
const _65fa0773 = () => interopDefault(import('../client/pages/_lang/gdpr.vue' /* webpackChunkName: "pages/_lang/gdpr" */))
const _539c4247 = () => interopDefault(import('../client/pages/_lang/nda.vue' /* webpackChunkName: "pages/_lang/nda" */))
const _93203838 = () => interopDefault(import('../client/pages/_lang/privacy.vue' /* webpackChunkName: "pages/_lang/privacy" */))
const _78b824ce = () => interopDefault(import('../client/pages/_lang/projects.vue' /* webpackChunkName: "pages/_lang/projects" */))
const _562d8ab2 = () => interopDefault(import('../client/pages/_lang/services.vue' /* webpackChunkName: "pages/_lang/services" */))

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
    component: _0075eb53,
    name: "careers"
  }, {
    path: "/gdpr",
    component: _310eedf1,
    name: "gdpr"
  }, {
    path: "/nda",
    component: _7b319409,
    name: "nda"
  }, {
    path: "/privacy",
    component: _e8baf6b4,
    name: "privacy"
  }, {
    path: "/projects",
    component: _49d99c4c,
    name: "projects"
  }, {
    path: "/services",
    component: _274f0230,
    name: "services"
  }, {
    path: "/",
    component: _c9c88320,
    name: "index"
  }, {
    path: "/:lang",
    component: _0393d52e,
    name: "lang"
  }, {
    path: "/:lang/careers",
    component: _2b434a91,
    name: "lang-careers"
  }, {
    path: "/:lang/gdpr",
    component: _65fa0773,
    name: "lang-gdpr"
  }, {
    path: "/:lang/nda",
    component: _539c4247,
    name: "lang-nda"
  }, {
    path: "/:lang/privacy",
    component: _93203838,
    name: "lang-privacy"
  }, {
    path: "/:lang/projects",
    component: _78b824ce,
    name: "lang-projects"
  }, {
    path: "/:lang/services",
    component: _562d8ab2,
    name: "lang-services"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
