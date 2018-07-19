<template>
  <div id="blog">
  	<h2>Add a New Blog Post</h2>
  	<form action="">
  		<label>Blog Title:</label>
  		<!-- .lazy basically inserts it in preview on tab, rather than on keyup which is the default -->
  		<input type="text" v-model.lazy="blog.title" required>
			<label>Blog Content:</label>
  		<textarea v-model="blog.content"></textarea>
  		<div id="checkboxes">
  			<label for="">Ninjas</label>
  			<input type="checkbox" value="ninjas" v-model="blog.categories">
  			<label for="">Wizards</label>
  			<input type="checkbox" value="wizards" v-model="blog.categories">
  			<label for="">Mario</label>
  			<input type="checkbox" value="mario" v-model="blog.categories">
  			<label for="">Cheese</label>
  			<input type="checkbox" value="cheese" v-model="blog.categories">
   		</div>
   		<label>Author</label>
   		<select v-model="blog.author">
   			<option v-for="author in authors">{{author}}</option>
   		</select>
  	</form>
  	<div id="preview">
  		<h3>Preview Blog</h3>
  		<p>Blog Title: {{blog.title}}</p>
  		<p>Blog Content:</p>
  		<p>{{blog.content}}</p>
  		<p>Blog Categories:</p>
  		<ul>
  			<li v-for="category in blog.categories">{{category}}</li>
  		</ul>
  		<p>Author: {{blog.author}}</p>
  	</div>

  </div>
</template>

<script>
	export default {
	  data: function() {
	    return {
	    	blog: {
		    	title: "",
		    	content: "",
		    	categories: [],
		    	author: ""
		    },
		    authors: ["Alex", "Jack", "Mike"]
	    }
	  },
	  methods: {

	  }
	}
</script>

<style lang="scss">
	#blog *{
	    box-sizing: border-box;
	}
	#blog{
	    margin: 20px auto;
	    max-width: 500px;
	}
	label{
	    display: block;
	    margin: 20px 0 10px;
	}
	input[type="text"], textarea{
	    display: block;
	    width: 100%;
	    padding: 8px;
	}
	#preview{
	    padding: 10px 20px;
	    border: 1px dotted #ccc;
	    margin: 30px 0;
	}
	h3{
	    margin-top: 10px;
	}
	#checkboxes input{
	    display: inline-block;
	    margin-right: 10px;
	}
	#checkboxes label{
	    display: inline-block;
	    margin-top: 10px;
	}
</style>
