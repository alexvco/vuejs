<template>
  <div>
    <header>
      <h3>{{header_title}}</h3>
      <p v-on:click="chgThat">{{title}}</p>
    </header>
  </div>
</template>

<script>
import { my_bus } from '../main';
export default {
  props: {
    title: {
      type: String
    }
  },
  data: function () {
    return {
      header_title: 'Header component'
    }
  },
  methods: {
    chgThat: function() {
      this.title = 'Vueee';
      my_bus.$emit('changedd', 'Vueee');
    }
  }
}
</script>

<style scoped>
  header{
    background: lightgreen;
    padding: 10px;
  }
  h3{
    text-align: center;
    color: #222;
  }
  p{
    text-align: center;
  }
</style>

