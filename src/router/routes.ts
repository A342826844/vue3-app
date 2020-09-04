import { RouteRecordRaw } from 'vue-router';

import home from '../views/home/index.vue';
import future from '../views/future/index.vue';
import spot from '../views/spot/index.vue';
// import assets from '../views/assets/index.vue';
import option from '../views/option/index.vue';

const assets = () => import('../views/assets/index.vue');

const routes: Array<RouteRecordRaw> = [
    {
        path: '/home',
        name: 'home',
        component: home,
        meta: {
            name: 'home',
        },
    },
    {
        path: '/future',
        name: 'future',
        component: future,
        meta: {
            name: 'future',
        },
    },
    {
        path: '/spot',
        name: 'spot',
        component: spot,
        meta: {
            name: 'spot',
        },
    },
    {
        path: '/assets',
        name: 'assets',
        component: assets,
        meta: {
            name: 'assets',
        },
    },
    {
        path: '/option',
        name: 'option',
        component: option,
        meta: {
            name: 'option',
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
