import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// import icons
import {
	faStar,
	faCartShopping
	// faPlay,
	// faUser,
} from '@fortawesome/free-solid-svg-icons'


library.add(faStar, faCartShopping)

import App from './App.vue'
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')

