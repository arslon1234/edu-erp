<template>
    <div class="flex-col flex relative my-3">
      <label :for="name" class="block mb-2 text-base font-medium text-paragraph-default uppercase ">
        {{ label }}
      </label>
      <vee-field
          :type="type"
          :name="name"
          class=" relative focus:outline-none border-paragraph-default  border-[2px] focus:border-primary-hover  w-full px-[1.375rem] p-3 rounded-lg "
          :placeholder="placeHolderProps"
          as="textarea"
          rows="4" cols="50"
      />
      <slot name="prepend__icon"></slot>
      <div class="append_icon ">
        <slot name="append__icon"></slot>
      </div>
      <ErrorMessage class="text-danger text-sm" :name="name"/>
    </div>
  </template>
  
  <script setup>
//   import type {InputHTMLAttributes} from "vue";
  
  
//   defineProps<{
//     label?: string;
//     name: string;
//     type: InputHTMLAttributes['type'];
//     placeHolderProps?: string;
//   }>();
const props = defineProps({
    label:{
        type: String
    },
    name: {
        type: String
    },
    placeHolderProps:{
        type: String
    }
})
  </script>
  
  
  <style lang="scss" scoped>
  .append_icon {
    position: absolute;
    right: 0;
    padding: 0 10px;
    top: 30%;
    transform: translate(-5%, 65%);
    cursor: pointer;
  }
  </style>