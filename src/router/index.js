import { createRouter, createMemoryHistory, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        current: true,
        isMenu:   true,
        component: () => import('../views/Home.vue')
    },
    {
        path: '/about-me',
        name: 'About Me',
        current: false,
        isMenu:   true,
        component: () => import('../views/AboutMe.vue')
    },
    {
        path: '/projects',
        name: 'Projects',
        current: false,
        isMenu:   true,
        component: () => import('../views/Projects.vue'),
    },
    // {
    //     path: '/projects/:id/:name',
    //     name: 'Projects Details',
    //     current: false,
    //     isMenu:   false,
    //     props: true,
    //     component: () => import('../views/ProjectDetails.vue'),
    // },
    {
        path: '/contact',
        name: 'Contact',
        current: false,
        isMenu:   true,
        component: () => import('../views/Contact.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;