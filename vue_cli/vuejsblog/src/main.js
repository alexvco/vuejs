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

// Filter: we can use filters to change the output of data into our browser. 
// For example, lets say we want to change the output of a data by uppercasing it 
// or by any shape or form such as "snippet"-ing it.
// We can use a filters to do that for us
// Filters do not change the data directly, we only change how their output to the browser
// The way we use filters is by first adding a pipe | to the end of data we want to use the filter on
// and then the filter name
// Vue.filter takes 2 args, the first is the name of the filter 
// the second is a function that takes a value which is the "data" that comes before the pipe | (data which we used the filter on)

Vue.filter('to-uppercase', function(value){
	return value.toUpperCase();
})

Vue.filter('snippet', function(value){
	return value.slice(0,100) + '...';
})

new Vue({
  el: '#app',
  render: h => h(App)
})
