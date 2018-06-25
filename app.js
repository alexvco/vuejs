
// A component is a reusable "template" that we can use in each of our Vue instances, instead of copy-pasting the code into all our Vue instances

// Vue component takes 2 params, the first is a string which is the name of this component,
// the second one is an object, with has different properties (most common one is template)
// - template: the template that will be rendered when this component is called

// Make sure the component comes before your Vue instances

Vue.component('say_hi', {
  template: '<p>I am a reusable component and my name is: {{name}}. <button v-on:click="changeMe">Change Me</button></p>',
  // data is a function that returns an object, as opposed to the data in a Vue instance 
  // this is because when creating and using a component, there will be multiple instances using the same kind of definition
  // if we were to make data a plain object instead of a function, then what we are doing is saying 
  // all those instances that use this component will share the object by reference
  // and hence any change you make to any single data, it will update it in every single component that we use (every Vue instance that the compoenent is being used)
  // By providing data as a function, everytime we create a new instance of it, we are just calling this function to return a fresh copy of this data
  // So if we change this data in one of the instances of the component, then its not going to update it in another one
  data: function(){
    return {
      name: 'Yolo'
    }
  },
  methods: {
    changeMe: function(){
      this.name = 'Mario';
    }
  }
});


// we are storing this instance to a variable called one
var one = new Vue({
  el: '#vue-app-one',
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

var two = new Vue({
  el: '#vue-app-two',
  data: {
    title: "Vue App Two"
  },
  methods: {
    changeName: function(){
      one.name = "JOEL"
    }
  },
  computed: {
    greet: function(){
      return "Hello from " + this.title
    }
  }
});


var vuerefs = new Vue({
  el: '#vue-refs',
  data: {
    output: "pizza"
  },
  methods: {
    readRefs: function(){
      console.log(this.$refs.alex.value); //note that $refs selects all the refs in this Vue instance, alex is the specific ref in this case, and you also have access to much more properties not just .value
      this.output = this.$refs.alex.value;
      console.log(this.$refs.tt.innerText);
    }
  }
});


// two.title = 'This will override the title data in vue-app-two';


