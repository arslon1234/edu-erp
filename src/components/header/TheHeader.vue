<template>
    <div class="h-[70px] flex items-center px-[30px] bg-global1 w-full border-l-2 border-[#fff]">
        <svg-icon type="mdi" class="lg:hidden text-white cursor-pointer w-[40px] h-[40px]" :path="mdiMenuClose" @click="isOpen = true"></svg-icon>
        <!-- <button class="p-[10px] bg-red lg:hidden" @click="isOpen = true">open sidebar</button> -->
    </div>
</template>

<script setup>
import { UseSidebar } from "../../hooks/UseSidebar";
const isOpen = UseSidebar()
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiMenuClose } from '@mdi/js';
</script>

<style scoped>

</style>