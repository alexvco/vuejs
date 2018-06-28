// import is from ES6 syntax, which is using webpack / babel to transpile es6 to vanilla js
import Vue from 'vue'
import App from './App.vue'

// we are creating a new vue instance here which will render the component App.vue (see import above) into #app div in index.html file
new Vue({
  el: '#app',
  render: h => h(App)
})

// basically a .vue file is just an extension of a component
// component: re-usable template (functionality/code)