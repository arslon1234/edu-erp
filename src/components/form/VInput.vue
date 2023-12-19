<template>
    <div class="w-full flex flex-col">
      <label :for="name" class="text-global1 text-[20px] font-normal">{{ label }}</label>
      <vee-field v-if="mask" :type="type" :name="name" v-mask="mask" :placeholder="placeHolder" class="w-full px-[20px] py-[15px] text-[21px] outline-none border-[1px] border-global1 rounded-md"/>
      <vee-field v-else :type="type" :name="name" :placeholder="placeHolder" class="w-full px-[20px] py-[15px] text-[21px] outline-none border-[1px] border-global1 rounded-md"/>
      <ErrorMessage :name="name" class="text-error_color mt-2 text-[20px] font-medium"/>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    name: {
      type: String,
    },
    type: {
      type: String,
      default: 'text'
    },
    placeHolder: {
      type: String,
    },
    label: {
      type: String,
    },
    mask:{
      type: String
    }
  });
  </script>
  
  <style lang="scss" scoped></style>
  