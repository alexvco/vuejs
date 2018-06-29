<template>
  <div>
    <h3>{{main_title}}</h3>
    <ul>
      <li v-for="ninja in ninjas" v-on:click="ninja.show = !ninja.show">
        <p>{{ninja.name}} <span v-if="ninja.show">ninja specialty: {{ninja.specialty}}</span></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      main_title: 'Main component',
      ninjas: [
        {name: 'Ryu', specialty: 'R-1', show: false},
        {name: 'Alex', specialty: 'A-1', show: false},
        {name: 'Jon', specialty: 'J-1', show: false},
        {name: 'Mike', specialty: 'M-1', show: false},
        {name: 'Kev', specialty: 'K-1', show: false}
      ]
    }
  }
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

