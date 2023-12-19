<template>
  <div class="w-full flex items-center justify-center">
    <svg-icon
      type="mdi"
      class="w-[30px] h-[30px] cursor-pointer text-global1"
      :path="mdiAccountEdit"
      @click="openEditModal"
    ></svg-icon>
    <svg-icon
      type="mdi"
      class="w-[30px] h-[30px] cursor-pointer text-[crimson]"
      :path="mdiDelete"
      @click="openDeleteModal"
    ></svg-icon>
    <svg-icon
    v-if="path"
      type="mdi"
      class="w-[25px] h-[25px] cursor-pointer text-[aqua]-50"
      :path="mdiEye"
      @click="openSingleUser"
    ></svg-icon>
  </div>
</template>

<script setup>
import { mdiAccountEdit, mdiDelete, mdiEye} from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
import { useRouter } from "vue-router";
const router = useRouter()
const props = defineProps({
    item:{
        type: Object
    },
    modal_value:{
        type: String
    },
    path:{
      type: String
    }
})
const openEditModal =()=>{
    props.modal_value.openModal(props.item)
}
const openDeleteModal =()=>{
    props.modal_value.openDeleteModal(props.item._id)
}
const openSingleUser =()=>{
  router.push(`${props.path}/${props.item._id}`)
}
</script>

<style lang="scss" scoped>

</style>
