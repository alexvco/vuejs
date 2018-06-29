<template>
  <div>
    <footer>
      <h3>{{footer_title}}</h3>
    </footer>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      footer_title: 'Footer component'
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
</style>

