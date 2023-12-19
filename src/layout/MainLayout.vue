<template>
    <div class="w-full flex h-screen">
        <TheSidebar/>
        <div class="w-full flex flex-col overflow-x-auto">
            <TheHeader/>
            <router-view class="overflow-x-auto"></router-view>
        </div>
    </div>
</template>

<script setup>
import TheSidebar from '../components/header/TheSidebar.vue';
import TheHeader from '../components/header/TheHeader.vue';
</script>

<style scoped>

</style>