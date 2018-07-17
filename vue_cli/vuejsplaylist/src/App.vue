<template>
  <!-- within a template you need to have everything inside 1 div -->
  <div>
    <h1>{{ title}}</h1>
    <p>{{ greeting() }}</p>
    <my_ninjas_component></my_ninjas_component>

    <br>
    <br>
    <br>

    <h2>Components</h2>
      <my_header_component v-bind:title="title"></my_header_component>
      <!-- this is where/how you send the props data -->
      <my_middle_component v-bind:my_prop="my_props_data"></my_middle_component>
      <my_footer_component v-bind:title="title" v-on:changeTitle="updateTitle"></my_footer_component>

    <br>
    <br>
    <br>

    <h2>formHelper (the point of using slots is to pass html inside a component)</h2>
      <my_formHelper_component>
        <h3 slot="my_slot_title">{{slot_title}}</h3>
        <p slot="my_slot_text">I am the paragraph text for the slot</p>
      </my_formHelper_component>

  </div>
</template>

<script>
  import Header from './components/Header.vue' // This is to import/use components locally
  import Middle from './components/Middle.vue' // This is to import/use components locally
  import Footer from './components/Footer.vue' // This is to import/use components locally
  import formHelper from './components/formHelper.vue' // This is to import/use components locally

  export default {
    // This is to import/use components locally
    components: {
      'my_header_component': Header,
      'my_middle_component': Middle,
      'my_footer_component': Footer,
      'my_formHelper_component': formHelper
    },
    data: function () {
      return {
        title: 'First Vue file',
        slot_title: 'I am a dynamic slot title',
        my_props_data: [
          {page_one: 1},
          {page_two: 2},
          {page_three: 3}
        ]
      }
    },
    methods: {
      greeting: function(){
        return 'heeeeey';
      },
      updateTitle: function(data_passed){
        this.title = data_passed;
      }
    }
  }
</script>

<!-- this scoped attribute at the end ties the styles below only to this App component and not to its nested components  -->
<!-- internally when we use scopes, vue.js gives each component a unique identifier and thats how it knows to separate the h1's in different components -->
<style lang="scss" scoped>
  h1{
    color: purple;
  }
</style>


<!-- Props are a way to transfer data from a parent component to a child component, its similar to how you pass data from ruby to js via data attribute -->
<!-- Remember to use v-bind if you want to use dynamic data in your tag attributes -->
<!-- Primitive types are: Boolean, String and Number -->
<!-- Reference types are: Arrays, Objects -->

<!-- 
when passing props to a child component of Reference type, 
we are only passing a reference to the original object in the parent component (not the actual data), 
therefore if we make changes to the Array or Object in the child component, 
it will also change in the parent component and other child components that are being referenced by it
 -->

<!-- 
when passing props to a child component of Primitive type,
we are actually passing the data, therefore any changes we make 
to that prop data in the child component will only be done/effective
for that child component as opposed to props of Reference type
-->


<!-- 
In order to duplicate the behavior of Reference type to Primitive type,
basically updating prop data in one component will update it in parent component and all subcomponents,
we need to do so with events (an event that fires up to the parent component).
The parent component is setup to listen out for when this event is emitted, so that 
when it is emitted, it can react to it.
The reaction could be to change the data stored in its (the parent) component.
 -->

<!-- 
Event bus: Its a Vue instance that can emit events and listen to events and react to them.
The point of event bus is to communicate between child components without going through the parent
The way we do it is by emitting an event on the "event bus" in child_component_1 and 
listening to that event on the "event bus" in child_component_2
 -->


