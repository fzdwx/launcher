import {createApp} from 'vue'
import App from './App.vue'
import './style.css'
import './assets/scss/global.scss'
import './assets/scss/raycast.scss'

const app = createApp(App);

app.directive('focus', {
    mounted(el) {
        el.focus()
    }
})

app.mount('#app')
