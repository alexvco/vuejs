export default {
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