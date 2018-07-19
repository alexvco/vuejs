<template>
  <div id="app">
    <add-blog></add-blog>
  </div>
</template>

<script>
  import addBlog from './components/addBlog.vue'
  
  export default {
    components: {
      'add-blog': addBlog
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
