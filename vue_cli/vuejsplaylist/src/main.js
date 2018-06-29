// import is from ES6 syntax, which is using webpack / babel to transpile es6 to vanilla js
import Vue from 'vue'
import App from './App.vue' // This is your root component, you can nest other components insice this component

// This is how you register the Ninjas component globally, basically can be used anywhere in your app
import Ninjas from './Ninjas.vue'
Vue.component('my_ninjas_component', Ninjas)

// we are creating a new vue instance here which will render the component App.vue (see import above) into #app div in index.html file
new Vue({
  el: '#app',
  render: h => h(App)
})

// basically a .vue file is just (an extension of) a component
// component: re-usable template (functionality/code)