import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify'
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import PrismicVue from 'prismic-vue';
import linkResolver from './prismic/link-resolver';
import htmlSerializer from './prismic/html-serializer';

Vue.config.productionTip = false;

Vue.use(PrismicVue, {
    endpoint: window.prismic.endpoint,
    linkResolver,
    htmlSerializer
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
