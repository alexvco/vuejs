// We can register (or makeup) all of our routes in this file
// The way we do this is by exporting an object (or array of objects)
// Each element in that array is going to represent a different route

import showBlogs from './components/showBlogs.vue';
import addBlog from './components/addBlog.vue';
import listBlogs from './components/listBlogs.vue';

export default [
  {path: "/", component: showBlogs}, // this is the root path
  {path: "/blogs/new", component: addBlog}
]