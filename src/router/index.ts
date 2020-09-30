import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// router.beforeEach((to, from, next) => {
//     console.log('beforeEach');
//     next();
// });

// router.afterEach((to, from) => {
//     console.log('afterEach');
//     console.log(from);
// });

// router.beforeResolve((to, from, next) => {
//     console.log('beforeResolve');
//     next();
// });

export default router;
