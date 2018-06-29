<template>
  <div>
    <h1>My ninjas</h1>
    <ul>
      <li v-for="ninja in ninjas">{{ ninja }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      ninjas: ['mario', 'yoshi']
    }
  }
}
</script>

<style>
  
</style>

