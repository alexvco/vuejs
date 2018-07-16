<template>
  <div>
    <h3>{{main_title}}</h3>
    <p>props: {{my_prop[0]["page_one"]}}</p>
    <ul>
      <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
        <p>{{ninja.name}} <span v-if="ninja.show">ninja specialty: {{ninja.specialty}}</span></p>
      </li>
    </ul>
    <p v-on:click="my_test">Access prop from a method (on-click event) change prop: {{my_prop[1]["page_two"]}}</p>
  </div>
</template>

<script>
export default {
  // this is where we receive the props
  props: ['my_prop'],
  // you can also receive props this way, basically with validations
    // props: {
    //   my_prop: {
    //     type: Array,
    //     required: true
    //   }
    // },
  data: function () {
    return {
      main_title: 'Middle component',
      ninjas: [
        {name: 'Ryu', specialty: 'R-1', show: false},
        {name: 'Alex', specialty: 'A-1', show: false},
        {name: 'Jon', specialty: 'J-1', show: false},
        {name: 'Mike', specialty: 'M-1', show: false},
        {name: 'Kev', specialty: 'K-1', show: false}
      ]
    }
  },
  methods: {
    my_test: function(){
      this.my_prop[1]["page_two"] = "esh"
    }
  },
  // life cycle hooks
  beforeCreate: function(){
    console.log("beforeCreate");
  },
  created: function(){
    console.log("created");
  },
  beforeMount: function(){
    console.log("beforeMount");
  },
  mounted: function(){
    console.log("mounted");
  },
  beforeUpdate: function(){
    console.log("beforeUpdate");
  },
  updated: function(){
    console.log("updated");
  },
  beforeDestroy: function(){
    console.log("beforeDestroy");
  },
  destroyed: function(){
    console.log("destroyed");
  },
}
</script>

<style scoped>
  div{
    background: lightyellow;
    padding: 40px;
  }
  h3{
    text-align: center;
    color: #222;
  }
</style>

