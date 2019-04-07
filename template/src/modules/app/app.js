import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'
import Components from 'components/_index'
import VueTheMask from 'vue-the-mask'
import i18n from 'plugins/i18n'

import 'scss/style'

import * as VueGoogleMaps from '../../../node_modules/vue2-google-maps/dist/main'

import { createStore } from './appStore'
import { createRouter } from 'router/index'
import { sync } from 'vuex-router-sync'

Vue.use(Vuesax)
Vue.use(VueTheMask)
Vue.use(VueGoogleMaps, {
    load: {
        key: ''
    }
})

Object.keys(Components).forEach(key => {
    Vue.component(key, Components[key])
})

export function createApp(ssrContext) {
    const store = createStore()
    const router = createRouter()

    sync(store, router)

    const app = new Vue({
        i18n,
        router,
        store,
        ssrContext,
        render: h => h(App)
    })

    return { app, router, store }
}
