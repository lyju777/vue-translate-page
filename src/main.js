import Vue from 'vue';
import App from './App.vue';
import TextareaAutosize from 'vue-textarea-autosize';

Vue.config.productionTip = false;

Vue.use(TextareaAutosize);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
