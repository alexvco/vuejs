<template>
  <!-- within a template you need to have everything inside 1 div -->
  <div>
    <h1>{{ title}}</h1>
    <p>{{ greeting() }}</p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      title: 'First Vue file'
    }
  },
  methods: {
    greeting: function(){
      return 'heeeeey';
    }
  }
}
</script>

<style lang="scss">

</style>
