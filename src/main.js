import Vue from 'vue';
import App from './app';
import router from '@/router/enterance'
new Vue({ // eslint-disable-line
    el: '#app',
    router,
    render: h => h(App)
});
