import { RouteRecordRaw } from 'vue-router';

import home from '../views/home/index.vue';
import future from '../views/future/index.vue';
import spot from '../views/spot/index.vue';
// import assets from '../views/assets/index.vue';
import option from '../views/option/index.vue';

import login from '../views/login/index.vue';

const assets = () => import('../views/assets/index.vue');

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: {
            name: 'home',
            hasFooter: true,
        },
    },
    {
        path: '/future',
        name: 'future',
        component: future,
        meta: {
            name: 'future',
            hasFooter: true,
        },
    },
    {
        path: '/login',
        name: 'login',
        component: login,
    },
    {
        path: '/spot',
        name: 'spot',
        component: spot,
        meta: {
            name: 'spot',
            hasFooter: true,
        },
    },
    {
        path: '/assets',
        name: 'assets',
        component: assets,
        meta: {
            name: 'assets',
            hasFooter: true,
        },
    },
    {
        path: '/option',
        name: 'option',
        component: option,
        meta: {
            name: 'option',
            hasFooter: true,
        },
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
];

export default routes;
