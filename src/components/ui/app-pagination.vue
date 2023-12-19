<template>
  <div>
    <v-pagination
      v-model="params.page"
      :pages="params.last_page"
      :range-size="1"
      active-color="#DCEDFF"
      @update:modelValue="changeParams"
    />
  </div>
</template>

<script setup>
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";

const props = defineProps({
    params:{
        type: Object,
    },
    changeParams:{
        type: Function
    }
})

console.log(props, 'prop')
</script>

<style lang="scss" scoped></style>
