<template>
  <div>
    <!-- the slot tag is used to output html that is inside this components tag (in this case inside <my_formHelper_component> in App.vue) -->
    <slot name="my_slot_title"></slot>
    <h4>SLOT</h4>
    <slot name="my_slot_text"></slot>
  </div>
</template>

<script>
export default {
  data: function () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>

