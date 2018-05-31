new Vue({
  el: '#vue-app',
  data: {
    name: 'Alex',
    job: 'work',
    age: 25,
    website: 'http://www.google.com',
    websiteTag: '<a href="http://www.google.com" target="_blank">Google website</a>',
    x: 0,
    y:0,
    a: 0,
    b: 0,
    available: false,
    nearby: false,
    error: false,
    success: false,
    characters: ['Mario', 'Luigi', 'Yoshi'],
    ninjas: [
      { name: 'Rafael', age: 22 },
      { name: 'Leo', age: 33 },
      { name: 'Mike', age: 23 }
    ]
  },
  methods: {
    greet: function(time_of_day){
      // this # refers to the vue instance, technically to use the data above in the methods you would need to do this.data.name, but vue-js has simplified that for us and you now need to only do this.name
      return 'Good ' + time_of_day + ' ' + this.name
    },
    subtractFive: function(){
      return this.age -= 5
    },
    addFive: function(){
      return this.age += 5
    },
    zero_it: function(){
      return this.age = 0;
    },
    updateXY: function(e){
      console.log(e); // you can see all the properties available to us for the mousemove event
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    myclick: function(e){
      // e.preventDefault(); this is done via the event modifier prevent
      console.log('you clicked');
    },
    logName: function(e){
      console.log(e.target.value);
    },
    logAge: function(){
      console.log('you entered your Age');
    },
    logJob: function(){
      console.log('you entered your Job');
    },
    insertName: function(e){
      this.name = e.target.value;
    }
    // addToA: function() {
    //   console.log('this is method addToA')
    //   return this.a + this.age
    // },
    // addToB: function() {
    //   console.log('this is method addToB')
    //   return this.b + this.age
    // }
  },
  computed: {
    addToA: function() {
      console.log('this is computed property addToA')
      return this.a + this.age
    },
    addToB: function() {
      console.log('this is computed property addToB')
      return this.b + this.age
    },
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
});

// data binding: basically if you want to include website data above as the value of an a tag's href, you need to bind it
// the way to bind the data is via a directive: an instruction such as v-bind:href that tells vuejs to basically bind the href attribute
// to some dynamic data that we have stored on our view instance, there is also a shortcut you can do :href instead of v-bind:href