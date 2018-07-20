<template>
  <!-- make sure to pass 'wide' as a string otherwise vuejs will think this is a data/object or property that is defined -->
  <!-- and will not be able to find it in the script below and hence will give error in the console -->
  <div v-theme:column="'wide'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-rainbow>{{blog.title | to-uppercase }}</h2>
      <article>{{blog.body | snippet }}</article>
    </div>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        blogs: [],
        search: ""
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
    },
    // We will use computed property to create a custom search filter
    // Technically we are not using a Vue.filter, but a computed property to "search/filter" for blogs
    // Reminder a computed property is similar to a method but caches the result into a value as opposed to calculating it everytime like a method
    computed: {
      filteredBlogs: function(){
        // the following returns an array of blogs that match the search input, by filtering out blogs that do not match the search input
        return this.blogs.filter(function (blog) {
          // if the following returns true, then that blog stays in the array (meaning the search term is in the blog)
          return blog.title.match(this.search)
        }.bind(this))
        // had to bind this as its inside second function and this no longer refers to the component.
        // you can also use fat arrow .filter((blog) => {}) which automatically binds this for you
      }
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
