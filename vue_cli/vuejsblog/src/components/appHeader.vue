<template>
  <nav>
    <ul>
      <!-- we could do normal a tags with hrefs but this reloads the page (and makes a new request to the server) which is something we are trying to avoid -->
      <!-- <li><a href="/"></a></li> -->

      <!-- instead we use router-link tags provided by vue-router, this is better because it intercepts the click events, -->
      <!-- so we dont reload the page nor makes a request to the server -->
      <!-- which is much quicker and the whole point of using single-page applications (vuejs, react, angular) -->
      <li><router-link to="/">Blog</router-link></li>
      <li><router-link to="/blogs/new">Add a New Blog</router-link></li>
      <!-- Note that vuejs has the classes: .router-link-exact-active and .router-link-active -->
      <!-- .router-link-exact-active: is only added if the url exactly matches -->
      <!-- .router-link-active: is added if the url contains a substring and also starts with that substring -->
      <!-- Basically if you are on the /blogs/new page the router-link with to="/blogs/new" (which is an a tag in html) will contain -->
      <!-- both .router-link-exact-active .router-link-active classes, meanwhile the router-link with to="/" will contain -->
      <!-- only .router-link-active class since its "to" value (= "/") is a substring of the url of the page (/blogs/new) that also starts with that substring -->

      <!-- if you wish, you can also add the exact attribute which will add both classes (.router-link-exact-active and .router-link-active) -->
      <!-- only if the url is exactly the same, (i didnt see much value in doing this as you already have the .router-link-exact-active class to target the tag with the exact url)  -->
      <!-- <li><router-link to="/" exact>Blog</router-link></li> -->
      <!-- <li><router-link to="/blogs/new" exact>Add a New Blog</router-link></li> -->

    </ul>
  </nav>
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

<style lang="scss" scoped>
  ul{
      list-style-type: none;
      text-align: center;
      margin: 0;
  }
  li{
      display: inline-block;
      margin: 0 10px;
  }
  a{
      color: #fff;
      text-decoration: none;
      padding: 6px 8px;
      border-radius: 10px;
  }
  nav{
      background: #444;
      padding: 14px 0;
      margin-bottom: 40px;
  }
  .router-link-exact-active{
      background: #eee;
      color: #444;
  }
</style>
