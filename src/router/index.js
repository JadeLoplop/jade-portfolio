import { createRouter, createMemoryHistory, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        current: true,
        component: () => import('../views/Home.vue')
    },
    {
        path: '/projects',
        name: 'Projects',
        current: false,
        component: () => import('../views/Project.vue')
    },
    {
        path: '/conatact',
        name: 'Contact',
        current: false,
        component: () => import('../views/Contact.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;