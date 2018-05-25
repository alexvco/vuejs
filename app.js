new Vue({
  el: '#vue-app',
  data: {
    name: 'Alex',
    job: 'work'
  },
  methods: {
    greet: function(time_of_day){
      // this # refers to the vue instance, technically to use the data above in the methods you would need to do this.data.name, but vue-js has simplified that for us and you now need to only do this.name
      return 'Good ' + time_of_day + ' ' + this.name
    }
  }
});