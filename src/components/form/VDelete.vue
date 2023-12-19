<template>
    <div class="w-full flex flex-col items-center">
        <p class="text-global1 text-[30px]">
            Are your sure you want to delete ?
        </p>
        <div class="flex gap-[30px] mt-[30px]">
            <VButton btn_type="info" @click="$emit('update:modelValue', false)">cancel</VButton>
            <VButton btn_type="danger" @click="deleteUser">delete</VButton>
        </div>
    </div>
</template>

<script setup>
import VButton from './VButton.vue';

const props = defineProps({
    deleteUser:{
        type: Function
    },
    modelValue:{
        type: Boolean
    }
})
</script>

<style lang="scss" scoped>

</style>