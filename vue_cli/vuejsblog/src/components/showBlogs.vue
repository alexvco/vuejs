<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="blog in blogs" class="single-blog">
      <h2>{{blog.title}}</h2>
      <article>{{blog.body}}</article>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        blogs: []
      }
    },
    methods: {

    },
    // life cycle hook, fired when component is first made
    created: function(){
      this.$http.get("https://jsonplaceholder.typicode.com/posts").then(function(response){
        console.log(response.body); // an array of 100 articles/posts in json format
        this.blogs = response.body.slice(0, 10); // this will give us the first 10 articles from that array
      })
    }
  }
</script>

<style lang="scss">
  #show-blogs{
      max-width: 800px;
      margin: 0px auto;
  }
  .single-blog{
      padding: 20px;
      margin: 20px 0;
      box-sizing: border-box;
      background: #eee;
  }
</style>
