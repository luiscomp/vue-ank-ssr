import Vue from 'vue'
import Vuex from 'vuex'

import loginStore from '../login/loginStore'
import dashboardStore from '../dashboard/dashboardStore'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        modules: {
            loginStore: { namespaced: true, ...loginStore },
            dashboardStore: { namespaced: true, ...dashboardStore }
        },

        state: {
            loading: false
        },

        mutations: {
            SHOW_LOADING(state, root) {
                if (!state.loading) {
                    root.$vs.loading({
                        type: 'default'
                    })
                } else {
                    root.$vs.loading.close()
                }
                state.loading = !state.loading
            }
        },

        actions: {
            showLoading({ commit }, root) {
                commit('SHOW_LOADING', root)
            }
        },

        getters: {

        }
    })
}
