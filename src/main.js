import Vue from 'vue';
import App from './app';
import router from '@/router/enterance'
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
