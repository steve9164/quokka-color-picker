import App from './App.vue'
const Vue = window.Vue; // From CDN to reduce size

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
