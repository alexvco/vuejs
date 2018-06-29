<template>
  <ul>
    <li v-for="ninja in ninjas">{{ ninja }}</li>
  </ul>
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

