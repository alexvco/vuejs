<template>
  <div>
    <header>
      <h3>{{title}}</h3>
    </header>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'Header component'
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
</style>

