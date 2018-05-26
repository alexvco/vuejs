new Vue({
  el: '#vue-app',
  data: {
    name: 'Alex',
    job: 'work',
    website: 'http://www.google.com',
    websiteTag: '<a href="http://www.google.com" target="_blank">Google website</a>'
  },
  methods: {
    greet: function(time_of_day){
      // this # refers to the vue instance, technically to use the data above in the methods you would need to do this.data.name, but vue-js has simplified that for us and you now need to only do this.name
      return 'Good ' + time_of_day + ' ' + this.name
    }
  }
});

// data binding: basically if you want to include website data above as the value of an a tag's href, you need to bind it
// the way to bind the data is via a directive: an instruction such as v-bind:href that tells vuejs to basically bind the href attribute
// to some dynamic data that we have stored on our view instance, there is also a shortcut you can do :href instead of v-bind:href