import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import store from './store';

import App from './App.vue';

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
	store,
	render: (h) => h(App)
}).$mount('#app');
