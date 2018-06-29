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
      <my_header_component></my_header_component>
      <!-- this is where/how you send the props data -->
      <my_main_component v-bind:my_prop="my_props_data"></my_main_component>
      <my_footer_component></my_footer_component>

  </div>
</template>

<script>
  import Header from './components/Header.vue' // This is to import/use components locally
  import Main from './components/Main.vue' // This is to import/use components locally
  import Footer from './components/Footer.vue' // This is to import/use components locally

  export default {
    // This is to import/use components locally
    components: {
      'my_header_component': Header,
      'my_main_component': Main,
      'my_footer_component': Footer
    },
    data: function () {
      return {
        title: 'First Vue file',
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






