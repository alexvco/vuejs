<template>
  <div>
    <header>
      <h3>{{header_title}}</h3>
      <p>{{title}}</p>
    </header>
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
      header_title: 'Header component'
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

