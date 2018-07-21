<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
  // Reminder: export default is exporting this component/object
  export default {
    data: function() {
      return {
        id: this.$route.params.id, // we can use $route because we have vue-router installed, remember we called our param name :id, hence params.id. This will grab the route parameter from the url and store it in here
        blog: {}
      }
    },
    methods: {

    },
    // life cycle hook to grab some data (always good to put in this created life cycle hook because the component is created)
    created: function() {
      this.$http.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(function(response){
        console.log(response);
        this.blog = response.body;
      })
    }
  }
</script>

<style lang="scss" scoped>
  #single-blog{
    max-width: 960px;
    margin: 0 auto;
  }
</style>
