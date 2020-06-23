// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'
import './public-path'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store/'
import i18n from './locales'
import { VueAxios } from './utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import themePluginConfig from '../config/themePluginConfig'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import Initializer from './core/bootstrap'
import './core/lazy_use'
// import './permission' // permission control
import './utils/filter' // global filter
import './global.less'

Vue.config.productionTip = false

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
Vue.component('pro-layout', ProLayout)
Vue.component('page-header-wrapper', PageHeaderWrapper)

window.umi_plugin_ant_themeVar = themePluginConfig.theme

let router = null
let instance = null

function render (props = {}) {
  const { container } = props
  router = new VueRouter({
    base: '/cd',
    mode: 'history',
    routes
  })
  instance = new Vue({
    router,
    store,
    i18n,
    created: Initializer,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#child_container') : '#child_container')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('333333333333[vue] vue app bootstraped1')
}

export async function mount (props) {
  console.log('333333333333[vue] vue app mount')
  render(props)
}

export async function unmount () {
  console.log('333333333333[vue] vue app unmount')
  instance.$destroy()
  instance = null
  router = null
}

export async function update (props) {
  console.log('>>>>>>>>>>>>>>>>>>>>>>>update props', props)
}
