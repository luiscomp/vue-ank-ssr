import Vue from 'vue'
import Router from 'vue-router'

// The meta data for your routes
const meta = require('./meta')

// Function to create routes
// Is default lazy but can be changed
function route(view) {
    return {
        path: view.toLowerCase(),
        name: view,
        meta: meta[view.toLowerCase()],
        component: () => import(`modules/${view.toLowerCase()}/${view}View.vue`)
    }
}

Vue.use(Router)

/* eslint-disable no-undef */
export function createRouter() {
    const router = new Router({
        base: __dirname,
        mode: 'history',
        scrollBehavior: () => ({ y: 0 }),
        routes: [
            {
                path: '/',
                name: 'login',
                component: () => import('modules/login/LoginView.vue')
            },
            {
                path: '/',
                name: 'main',
                component: () => import('modules/main/MainView.vue'),
                children: [
                    route('Dashboard'),
                ]
            },
            // Global redirect for 404
            { path: '*', redirect: '/' }
        ]
    })

    // Send a pageview to Google Analytics
    router.beforeEach((to, from, next) => {
        if (typeof ga !== 'undefined') {
            ga('set', 'page', to.path)
            ga('send', 'pageview')
        }
        next()
    })

    return router
}
