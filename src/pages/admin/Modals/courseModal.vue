<template>
    <AppModal v-model="dialog">
      <div class="my-[20px]">
      <h1 class="text-center text-[30px] text-global1" v-if="!forms._id">Create course</h1>
      <h1 class="text-center text-[30px] text-global1" v-else>Edit course</h1>
    </div>
      <vee-form
        :validation-schema="schema"
        @submit="send"
        :initial-values="forms"
      >
        <VInput
          type="text"
          label="Name"
          name="name"
          placeHolder="Course Name"
        ></VInput>
        <VInput
          type="number"
          label="Price"
          name="price"
          placeHolder="Price"
        ></VInput>
        <VInput
          type="number"
          label="Period"
          name="period"
          placeHolder="Period"
        ></VInput>
       <div class="flex justify-center mt-[30px]">
        <VButton type="submit" btn_type="create" :isLoading="loading">{{
          btn_title
        }}</VButton>
       </div>
      </vee-form>
    </AppModal>
    <AppModal v-model="dialog2">
      <VDelete v-model="dialog2" :deleteUser="deleteCourse"/>
    </AppModal>
  </template>
  
  <script setup>
  import { computed, reactive, ref, watch } from "vue";
  import AppModal from "../../../components/ui/app-modal.vue";
  import VInput from "../../../components/form/VInput.vue";
  import VButton from "../../../components/form/VButton.vue";
  import VDelete from "../../../components/form/VDelete.vue";
  const dialog = ref(false);
  const dialog2 = ref(false);
  const loading = ref(false);
  const unique_id = ref()
  import { useCourseStore } from "../../../stores/admin/course";
  const store = useCourseStore();
  let forms = ref({
    name: "",
    price: "",
    period: "",
  });
  const openModal = (item) => {
    if (item) forms.value = { ...item };
    dialog.value = true;
  };
  const openDeleteModal =(id) =>{
    console.log(id, 'delete')
    unique_id.value = id
    dialog2.value = true
  }
  watch(dialog, (value) => {
    if (!value) {
      forms.value = {};
    }
  });
  const schema = computed(() => {
    return {
      name: "required|min:3|max:15",
      price: "required|min:3|max:15",
      period: "required|min:1|:max:15",
    };
  });
  const btn_title = computed(() => {
  if (loading.value) {
    return "Loading";
  } else {
    if (forms.value._id) return "Edit course";
    return " Create course";
  }
});
  const send = async (values) => {
    console.log(values);
    if (!forms.value._id) {
      loading.value = true;
      await store.createAdminCourse(values);
      loading.value = false;
    }else {
      loading.value = true;
      await store.updateAdminCourse(values, forms.value._id);
      loading.value = false;
    }
  };
  const deleteCourse = async ()=>{
    await store.deleteAdminCourse(unique_id.value)
  }
  defineExpose({ openModal, openDeleteModal });
  </script>
  
  <style lang="scss" scoped></style>
  