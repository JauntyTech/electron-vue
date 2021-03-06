import Vue from 'vue'
{{#isEnabled plugins 'vue-electron'}}
import Electron from 'vue-electron'
{{/isEnabled}}
{{#if element}}
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import './theme/index.css'
{{/if}}
{{#isEnabled plugins 'vue-resource'}}
import Resource from 'vue-resource'
{{/isEnabled}}
{{#isEnabled plugins 'vue-router'}}
import Router from 'vue-router'

import App from './App'
import routes from './routes'
{{/isEnabled}}

{{#isEnabled plugins 'vue-electron'}}
Vue.use(Electron)
{{/isEnabled}}
{{#if element}}
Vue.use(ElementUI, { locale })
{{/if}}
{{#isEnabled plugins 'vue-resource'}}
Vue.use(Resource)
{{/isEnabled}}
{{#isEnabled plugins 'vue-router'}}
Vue.use(Router)
{{/isEnabled}}
Vue.config.debug = true

{{#isEnabled plugins 'vue-router'}}
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  ...App
}).$mount('#app')
{{else}}
import App from './App'

/* eslint-disable no-new */
new Vue({
  ...App
}).$mount('#app')
{{/isEnabled}}
