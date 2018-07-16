// import is from ES6 syntax, which is using webpack / babel to transpile es6 to vanilla js
import Vue from 'vue'
import App from './App.vue' // This is your root component, you can nest other components insice this component

// This is how you register the Ninjas component globally, basically can be used anywhere in your app
import Ninjas from './Ninjas.vue'
Vue.component('my_ninjas_component', Ninjas)


export const my_bus = new Vue();

// we are creating a new vue instance here which will render the component App.vue (see import above) into #app div in index.html file
new Vue({
  el: '#app',
  render: h => h(App)
})

// basically a .vue file is just (an extension of) a component
// component: re-usable template (functionality/code)



// Notes on life cycle hooks
// When we create a new vue instance or component it goes through a life cycle. 
// Along this life cycle we have access to certain functions or methods that fire through certain points in this life cycle



// -- beforeCreate: this is the first life cycle that is fired when we create a new vue instance. 

// Once this function is ran, the instance observes any data. In the beforeCreate function we dont have access to any data nor any init events




// -- created: this function fires when the component has been created. If we want to fire some function after the component has been created we throw it in this function 

// Since this function is fired after data and event stuff has been setup, we have access to data and event stuff inside this function




// -- beforeMount: this is when its compiled the template that we've specified. 

// Once template has been compiled, then its about to mount the dom. 
// At this point the component or instance has been created but its not mounted to the dom yet, 
// aka its not going to appear in our browser just yet
// This life cycle hook method is not used that often



// -- mounted: Once it has mounted the dom, then we get access to another life cycle hook.

// At this point we have access to that code in the dom, because its been mounted.
// So if we wanted to reach in and manipulate the dom in any way, shape or form we could do that here


// When mounted then a couple of different things that can happen


// -- beforeUpdate: we could either update a component by changing the data in it, we change the state and when that happens we get another life cycle hook called beforeUpdate
// so if vue js detects that we are changing some data before it updates the dom with that new data, 
// we get this other life cycle hook called beforeUpdate and we can fire any code there that we want before the component updates

// after it updates and it outputs to the dom, we get this other life cycle function called updated


// -- updated: we can fire any code here and access the updated dom



// Another thing that can hapen after a component has been mounted is, it could be destroyed (if we want to get rid of a component or instance completely)


// -- beforeDestroy: insert code here that you want to run before the component is destroyed

// -- destroyed: insert code here that you want to run once a component is destroyed




// Recap all life cycle hooks

// beforeCreate: vue instance created but component is still not created, no access to data or init events
// created: fired when component has been created, we have access to data and init events in this life cycle hook
// beforeMount: when template is compiled but dom not rendered
// mounted: once its mounted in the dom, aka appears in your browser
// beforeUpdate: before we update data in it
// updated: after data has been updated
// beforeDestroy: before we destroy the component
// destroyed: once component has been destroyed


