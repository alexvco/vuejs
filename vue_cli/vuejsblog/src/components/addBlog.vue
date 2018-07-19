<template>
  <div id="blog">
  	<h2>Add a New Blog Post</h2>
  	<form action="">
  		<label>Blog Title:</label>
  		<input type="text" required>
			<label>Blog Content:</label>
  		<textarea></textarea>
  	</form>
  	<div id="preview">
  		<h3>Preview Blog</h3>
  		<p>Blog Title</p>
  		<p>Blog Content</p>
  	</div>
  </div>
</template>

<script>
	export default {
	  data: function() {
	    return {

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
	    margin-top: 0;
	}
</style>
