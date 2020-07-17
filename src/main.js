import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBWP3b-D3ZiwAESzZTouYcSUp-v2kFixxU",
  authDomain: "myadress-e4b7b.firebaseapp.com",
  databaseURL: "https://myadress-e4b7b.firebaseio.com",
  projectId: "myadress-e4b7b",
  storageBucket: "myadress-e4b7b.appspot.com",
  messagingSenderId: "999808780350",
  appId: "1:999808780350:web:aabc82c4b9dc7c31b8696f",
  measurementId: "G-GMJ54Q10EY"
};
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
