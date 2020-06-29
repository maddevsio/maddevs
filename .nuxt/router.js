import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6d48dc29 = () => interopDefault(import('../client/pages/careers.vue' /* webpackChunkName: "pages/careers" */))
const _d480c64a = () => interopDefault(import('../client/pages/gdpr.vue' /* webpackChunkName: "pages/gdpr" */))
const _239a5fdf = () => interopDefault(import('../client/pages/nda.vue' /* webpackChunkName: "pages/nda" */))
const _0f151508 = () => interopDefault(import('../client/pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _7764c636 = () => interopDefault(import('../client/pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _54da2c1a = () => interopDefault(import('../client/pages/services.vue' /* webpackChunkName: "pages/services" */))
const _66fe2674 = () => interopDefault(import('../client/pages/index.vue' /* webpackChunkName: "pages/index" */))
const _0d9329f8 = () => interopDefault(import('../client/pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _4297c2e7 = () => interopDefault(import('../client/pages/_lang/careers.vue' /* webpackChunkName: "pages/_lang/careers" */))
const _5d625edd = () => interopDefault(import('../client/pages/_lang/gdpr.vue' /* webpackChunkName: "pages/_lang/gdpr" */))
const _511354c6 = () => interopDefault(import('../client/pages/_lang/nda.vue' /* webpackChunkName: "pages/_lang/nda" */))
const _6477478c = () => interopDefault(import('../client/pages/_lang/privacy.vue' /* webpackChunkName: "pages/_lang/privacy" */))
const _4bf2b738 = () => interopDefault(import('../client/pages/_lang/projects.vue' /* webpackChunkName: "pages/_lang/projects" */))
const _29681d1c = () => interopDefault(import('../client/pages/_lang/services.vue' /* webpackChunkName: "pages/_lang/services" */))

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
    component: _6d48dc29,
    name: "careers"
  }, {
    path: "/gdpr",
    component: _d480c64a,
    name: "gdpr"
  }, {
    path: "/nda",
    component: _239a5fdf,
    name: "nda"
  }, {
    path: "/privacy",
    component: _0f151508,
    name: "privacy"
  }, {
    path: "/projects",
    component: _7764c636,
    name: "projects"
  }, {
    path: "/services",
    component: _54da2c1a,
    name: "services"
  }, {
    path: "/",
    component: _66fe2674,
    name: "index"
  }, {
    path: "/:lang",
    component: _0d9329f8,
    name: "lang"
  }, {
    path: "/:lang/careers",
    component: _4297c2e7,
    name: "lang-careers"
  }, {
    path: "/:lang/gdpr",
    component: _5d625edd,
    name: "lang-gdpr"
  }, {
    path: "/:lang/nda",
    component: _511354c6,
    name: "lang-nda"
  }, {
    path: "/:lang/privacy",
    component: _6477478c,
    name: "lang-privacy"
  }, {
    path: "/:lang/projects",
    component: _4bf2b738,
    name: "lang-projects"
  }, {
    path: "/:lang/services",
    component: _29681d1c,
    name: "lang-services"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
