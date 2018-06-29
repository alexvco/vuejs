<template>
  <!-- within a template you need to have everything inside 1 div -->
  <div>
    <h1>{{ title}}</h1>
    <p>{{ greeting() }}</p>
    <my_ninjas_component></my_ninjas_component>
  </div>
</template>

<script>
// import Ninjas from './Ninjas.vue' // This is to import/use components locally

export default {
  // This is to import/use components locally
  // components: {
  //   'my_ninjas_component': Ninjas
  // },
  data: function () {
    return {
      title: 'First Vue file'
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
