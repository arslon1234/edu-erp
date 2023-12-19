<template>
  <div class="w-full h-full flex items-center justify-center">
    <profileModal ref="profile_modal"/>
    <div class="w-[500px] flex flex-col gap-3">
        <img :src="image" class="w-[150px] h-[150x]" alt="">
      <p>
        Firstname: <span>{{ store?.user?.first_name }}</span>
      </p>
      <p>
        Lastname: <span>{{ store?.user?.last_name }}</span>
      </p>
      <p>
        Phone number: <span>{{ store?.user?.phone }}</span>
      </p>
      <p>
        Role: <span>{{ store?.user?.role }}</span>
      </p>
    </div>
    <VButton btn_type="edit" @click="updateProfile">update profile</VButton>
  </div>
</template>

<script setup>
import { useAuthStore } from "../../stores/auth";
const store = useAuthStore();
import VButton from "../../components/form/VButton.vue";
import profileModal from "./Modal/profileModal.vue";
import { ref } from "vue";
import { onMounted } from "vue";
const profile_modal = ref()
const image = ref("")
const updateImage =()=>{
    image.value = `${import.meta.env.VITE_APP_BASE_URL}/${store?.user?.image}`
    console.log(image.value)
}
const updateProfile =()=>{
    profile_modal.value.openModal()
}
onMounted(async ()=>{
   await store.getProfile()
   updateImage()
})
</script>

<style lang="scss" scoped></style>
