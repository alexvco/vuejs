import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

// Custom Directives, (we will use them globally in this example because its in this main.js file, you can also use them locally)
// first param is the name of the Directive, 
// second param is an object where we control the functionality of this directive
// Directives just like components have life cycle hooks (created, mounted, updated, bind)
Vue.directive("rainbow", {
	// this life cycle hook fires when the directive is bound to the element (as soon as it hooks up)
	// bind takes 3 params (el, binding, vnode)
	// el refers to the element itself (so the h2 element in this example)
	// binding refers to the information about the connection, basically if you pass a value to your directive ie v-rainbow="myvalue", myvalue is the binding
	// vnode refers to the virtaul node on the DOM, you will rarely need this
	bind: function(el, binding, vnode){
		// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
		el.style.color = "#" + Math.random().toString().slice(2, 8); // this will get us a random 6 digit number
	}
});

Vue.directive("theme", {
	bind: function(el, binding, vnode){
		if (binding.value == 'wide'){
			el.style.maxWidth = '1200px';
		} else if (binding.value == 'narrow'){
			el.style.maxWidth = '600px';
		}
		if (binding.arg == 'column'){
			el.style.background = '#ddd';
			el.style.padding = '20px';
		}
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})
