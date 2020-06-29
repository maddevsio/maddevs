import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _674975df = () => interopDefault(import('../client/pages/careers.vue' /* webpackChunkName: "pages/careers" */))
const _54236236 = () => interopDefault(import('../client/pages/gdpr.vue' /* webpackChunkName: "pages/gdpr" */))
const _15284495 = () => interopDefault(import('../client/pages/nda.vue' /* webpackChunkName: "pages/nda" */))
const _1b13e19c = () => interopDefault(import('../client/pages/privacy.vue' /* webpackChunkName: "pages/privacy" */))
const _85113980 = () => interopDefault(import('../client/pages/projects.vue' /* webpackChunkName: "pages/projects" */))
const _ca266db8 = () => interopDefault(import('../client/pages/services.vue' /* webpackChunkName: "pages/services" */))
const _dbaf0808 = () => interopDefault(import('../client/pages/index.vue' /* webpackChunkName: "pages/index" */))
const _694739ba = () => interopDefault(import('../client/pages/_lang/index.vue' /* webpackChunkName: "pages/_lang/index" */))
const _1ca087c6 = () => interopDefault(import('../client/pages/_lang/careers.vue' /* webpackChunkName: "pages/_lang/careers" */))
const _6941e167 = () => interopDefault(import('../client/pages/_lang/gdpr.vue' /* webpackChunkName: "pages/_lang/gdpr" */))
const _53b759d3 = () => interopDefault(import('../client/pages/_lang/nda.vue' /* webpackChunkName: "pages/_lang/nda" */))
const _7cdc5570 = () => interopDefault(import('../client/pages/_lang/privacy.vue' /* webpackChunkName: "pages/_lang/privacy" */))
const _7fd9e4c2 = () => interopDefault(import('../client/pages/_lang/projects.vue' /* webpackChunkName: "pages/_lang/projects" */))
const _5d4f4aa6 = () => interopDefault(import('../client/pages/_lang/services.vue' /* webpackChunkName: "pages/_lang/services" */))

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
    component: _674975df,
    name: "careers"
  }, {
    path: "/gdpr",
    component: _54236236,
    name: "gdpr"
  }, {
    path: "/nda",
    component: _15284495,
    name: "nda"
  }, {
    path: "/privacy",
    component: _1b13e19c,
    name: "privacy"
  }, {
    path: "/projects",
    component: _85113980,
    name: "projects"
  }, {
    path: "/services",
    component: _ca266db8,
    name: "services"
  }, {
    path: "/",
    component: _dbaf0808,
    name: "index"
  }, {
    path: "/:lang",
    component: _694739ba,
    name: "lang"
  }, {
    path: "/:lang/careers",
    component: _1ca087c6,
    name: "lang-careers"
  }, {
    path: "/:lang/gdpr",
    component: _6941e167,
    name: "lang-gdpr"
  }, {
    path: "/:lang/nda",
    component: _53b759d3,
    name: "lang-nda"
  }, {
    path: "/:lang/privacy",
    component: _7cdc5570,
    name: "lang-privacy"
  }, {
    path: "/:lang/projects",
    component: _7fd9e4c2,
    name: "lang-projects"
  }, {
    path: "/:lang/services",
    component: _5d4f4aa6,
    name: "lang-services"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
