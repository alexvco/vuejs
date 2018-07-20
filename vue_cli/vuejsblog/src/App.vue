<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
    <show-blogs></show-blogs>
    <list-blogs></list-blogs>
  </div>
</template>

<script>
  import addBlog from './components/addBlog.vue'
  import showBlogs from './components/showBlogs.vue'
  import listBlogs from './components/listBlogs.vue'

  export default {
    components: {
      'add-blog': addBlog,
      'show-blogs': showBlogs,
      'list-blogs': listBlogs
    },
    data: function() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="scss">

</style>

<!-- Directives are a way to tell vue.js to do something aka exhibit a certain behavior for us -->
<!-- Directives that we have used so far: v-if, v-on, v-for, v-model -->
<!-- All of these are directives telling vuejs to do something for us -->
<!-- Anything coming after the v- is a Directive -->
<!-- and we add them to html elements as attributes -->

<!-- v-on:click.prevent="here" -->
<!-- on: is a directive -->
<!-- click: is an argument -->
<!-- prevent: is a modifier -->
<!-- here: is a value -->