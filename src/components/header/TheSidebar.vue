<template>
  <div class="flex bg-global1">
    <div :class="isOpen ? 'block' : 'hidden'" @click="isOpen = false" class="
        fixed
        inset-0
        z-20
        transition-opacity
        opacity-50
        lg:hidden
        bg-[#00111380]
      ">
    </div>
    <div
    :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
    class="w-[222px] bg-global1 mt-[70px] fixed
        inset-y-0
        left-0
        z-20
        overflow-y-auto
        transition
        duration-300
        transform
        lg:translate-x-0 lg:static
        "
    >
      
      <router-link
        v-for="(item, index) in menu"
        :key="index"
        :to="item.path"
        class="flex py-[15px] px-[30px] gap-[15px] text-white"
        active-class="bg-[#F5FCCD] active"
        :class="{'bg-[#F5FCCD] active': $route.meta.child === `${item.keys}`}"
      >
        <SvgIcon type="mdi" :path="item.icon" />
        <span>{{ item.label }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { AdminMenu } from "../menu/AdminMenu";
import {DirectorMenu} from '../menu/DirectorMenu'
import { UseSidebar } from "../../hooks/UseSidebar";
import {TeacherMenu} from '../menu/TeacherMenu'
import { computed } from "vue";
const isOpen = UseSidebar()

let role = localStorage.getItem('role')
const menu = computed(()=>{
  if(role == 'admin'){
    return AdminMenu
  }else if(role == 'director'){
    return DirectorMenu
  }else if(role == 'teacher'){
    return TeacherMenu
  }
})
</script>

<style scoped>
.active{
  color: #12486B;
}
</style>
