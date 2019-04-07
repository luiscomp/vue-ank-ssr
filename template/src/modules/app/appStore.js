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
            EXIBIR_LOADING(state, root) {
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
            exibirLoading({ commit }, root) {
                commit('EXIBIR_LOADING', root)
            }
        },

        getters: {

        }
    })
}
