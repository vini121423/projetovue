import Vue from 'vue'
import App from './App.vue'

// Instalar bibliotecas ou adicionar ações ao HTML ou Configurar a página //

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
