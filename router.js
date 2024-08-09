import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m);

const routes = [
    { path: '/', name: 'home', component: page('index.vue') },

    // legal
    { path: '/privacy', name: 'privacy', component: page('privacy.vue') },
    { path: '/terms', name: 'terms', component: page('terms.vue') },

];
export function createRouter() {
    return new Router({
        routes,
        linkActiveClass: 'active',
        mode: 'history',
        scrollBehavior() {
            return { x: 0, y: 0 }
        },
    })
}
