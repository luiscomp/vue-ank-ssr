import Vue from 'vue'
import Router from 'vue-router'

// The meta data for your routes
const meta = require('./meta')

// Function to create routes
// Is default lazy but can be changed
function route(path, view) {
    return {
        path: path,
        name: view,
        meta: meta[path],
        component: () => import(`modules/${path}/${view}.vue`)
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
                component: () => import('modules/login/Login.vue')
            },
            {
                path: '/main',
                name: 'main',
                component: () => import('modules/main/Main.vue'),
                children: [

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
