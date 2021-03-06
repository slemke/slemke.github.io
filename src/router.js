import Vue from 'vue';
import VueRouter from 'vue-router';
import Links from './components/Links.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Links',
        component: Links
    }
];

const router = new VueRouter({
    routes
});

export default router;
