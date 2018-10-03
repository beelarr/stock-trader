import Vue from "vue";
import Router from "vue-router";
import { routes } from './routes'
import App from './App.vue';

Vue.use(Router);

export const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});


