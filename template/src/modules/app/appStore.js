import Vue from 'vue'
import Vuex from 'vuex'

import loginStore from '../login/loginStore'

Vue.use(Vuex)

export function createStore() {
    return new Vuex.Store({
        modules: {
            loginStore: { namespaced: true, ...loginStore }
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
