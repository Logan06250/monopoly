import './firebaseConfig'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { firestorePlugin } from 'vuefire'
import * as firebase from 'firebase'

Vue.config.productionTip = false

Vue.use(firestorePlugin)

let app = ''

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue ({
			router,
			render: h => h(App)
		}).$mount('#app');
	}
})