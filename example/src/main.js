import Vue from 'vue'
import App from './App.vue'
import Icon from '../../src/index.js'

Vue.component(Icon.name, Icon)

new Vue({
    el: '#app',
    render: h => h(App)
})
