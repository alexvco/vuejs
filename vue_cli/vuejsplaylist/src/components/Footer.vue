<template>
  <div>
    <footer>
      <h3>{{footer_title}}</h3>
      <p v-on:click="changeIt">{{title}}</p>
    </footer>
  </div>
</template>

<script>
import {my_bus} from '../main';
export default {
  props: {
    title: {
      type: String
    }
  },
  data: function () {
    return {
      footer_title: 'Footer component'
    }
  },
  methods:{
    changeIt: function(){
      // this.title = "hav" // this changes it only in this component, if we want to change it in parent and all other components, we need to emit an event as follows
      this.$emit('changeTitle', 'data i want to pass with the event')
    }
  },
  // this fires when the component is first created
  created: function(){
    var that = this;
    my_bus.$on('changedd', function(data_passed_through){
      console.log(data_passed_through)
      that.title = data_passed_through;
    })
  }
}
</script>

<style scoped>
  footer{
    background: lightblue;
    padding: 1px;
  }
  h3{
    text-align: center;
    color: #222;
  }
  p{
    text-align: center;
  }
</style>

