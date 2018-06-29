<template>
  <div>
    <footer>
      <h3>{{footer_title}}</h3>
      <p v-on:click="changeIt">{{title}}</p>
    </footer>
  </div>
</template>

<script>
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

