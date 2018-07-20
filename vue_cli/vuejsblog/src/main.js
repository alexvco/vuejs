import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);


new Vue({
  el: '#app',
  render: h => h(App)
})



// *** No longer in this file but kept notes ***

// Filter: we can use filters to change the output of data into our browser. 
// For example, lets say we want to change the output of a data by uppercasing it 
// or by any shape or form such as "snippet"-ing it.
// We can use a filters to do that for us
// Filters do not change the data directly, we only change how their output to the browser
// The way we use filters is by first adding a pipe | to the end of data we want to use the filter on
// and then the filter name
// Vue.filter takes 2 args, the first is the name of the filter 
// the second is a function that takes a value which is the "data" that comes before the pipe | (data which we used the filter on)


// Custom Directives, (we will use them globally in this example because its in this main.js file, you can also use them locally)
// first param is the name of the Directive, 
// second param is an object where we control the functionality of this directive
// Directives just like components have life cycle hooks (created, mounted, updated, bind)

	// this life cycle hook fires when the directive is bound to the element (as soon as it hooks up)
	// bind takes 3 params (el, binding, vnode)
	// el refers to the element itself (so the h2 element in this example)
	// binding refers to the information about the connection, basically if you pass a value to your directive ie v-rainbow="myvalue", myvalue is the binding
	// vnode refers to the virtaul node on the DOM, you will rarely need this

		// Math.random() returns a random number between 0 (inclusive),  and 1 (exclusive):
		
