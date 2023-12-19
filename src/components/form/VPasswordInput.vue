<template>
  <div class="w-full flex flex-col">
    <label :for="name" class="text-global1 text-[20px] font-normal">{{
      label
    }}</label>
    <div class="w-full flex justify-between items-center mt-[7px]">
        <vee-field
      :type="active ? 'text' : 'password'"
      :name="name"
      :placeholder="placeHolder"
      class="w-[89%] p-[20px] text-[21px] outline-none rounded-s-lg"
    />
    <button type="button" class="w-[10%] bg-[white] p-[20px] rounded-e-lg flex items-center justify-center" @click="changeType">
      <svg-icon class="text-global1 text-2xl" v-if="!active" type="mdi" :path="mdiEye"></svg-icon>
      <svg-icon type="mdi" class="text-global1" v-else :path="mdiEyeOff"></svg-icon>
    </button>
    </div>
    <ErrorMessage
      :name="name"
      class="text-error_color mt-2 text-[20px] font-medium"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiEye,mdiEyeOff } from '@mdi/js';
const active = ref(false)
const changeType =(e)=>{
    e.preventDefault();
    
    active.value = !active.value
}
console.log(active.value)
const props = defineProps({
  name: {
    type: String,
  },
  placeHolder: {
    type: String,
  },
  label: {
    type: String,
  },
});
</script>

<style lang="scss" scoped></style>
