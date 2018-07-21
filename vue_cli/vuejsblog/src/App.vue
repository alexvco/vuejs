<template>
  <div>
    <!-- <add-blog></add-blog> -->
    <!-- <show-blogs></show-blogs> -->
    <!-- <list-blogs></list-blogs> -->

    <app-header></app-header>
    <!-- This is saying, this is where we want to get the components loaded in when we visit those routes  -->
    <router-view></router-view>
  </div>
</template>

<script>
  import addBlog from './components/addBlog.vue'
  import showBlogs from './components/showBlogs.vue'
  import listBlogs from './components/listBlogs.vue'
  import appHeader from './components/appHeader.vue'
  import singleBlog from './components/singleBlog.vue'

  export default {
    components: {
      'add-blog': addBlog,
      'show-blogs': showBlogs,
      'list-blogs': listBlogs,
      'app-header': appHeader,
      'single-blog': singleBlog
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