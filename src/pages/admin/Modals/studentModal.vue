<template>
  <AppModal v-model="dialog">
    <div class="my-[20px]">
      <h1 class="text-center text-[30px] text-global1" v-if="!forms._id">
        Create student
      </h1>
      <h1 class="text-center text-[30px] text-global1" v-else>Edit student</h1>
    </div>
    <vee-form
      :validation-schema="schema"
      @submit="send"
      :initial-values="forms"
    >
      <VInput
        type="text"
        label="First Name"
        name="first_name"
        placeHolder="First Name"
      ></VInput>
      <VInput
        type="text"
        label="Last Name"
        name="last_name"
        placeHolder="Last Name"
      ></VInput>
      <VInput
        type="text"
        label="Phone number"
        name="phone"
        mask="(+998)-##-###-##-##"
        placeHolder="(+998)-93-102-06-36"
      ></VInput>
      <div class="flex justify-center mt-[30px]">
        <VButton type="submit" btn_type="create" :isLoading="loading">{{
          btn_title
        }}</VButton>
      </div>
    </vee-form>
  </AppModal>
  <AppModal v-model="dialog2">
    <VDelete v-model="dialog2" :deleteUser="deleteStudent" />
  </AppModal>
</template>

<script setup>
import { computed, ref, watch } from "vue";
import AppModal from "../../../components/ui/app-modal.vue";
import VInput from "../../../components/form/VInput.vue";
import VButton from "../../../components/form/VButton.vue";
import VDelete from "../../../components/form/VDelete.vue";
import { useStudentStore } from "../../../stores/admin/student";
const store = useStudentStore();
const dialog = ref(false);
const dialog2 = ref(false);
const loading = ref(false);
const unique_id = ref();
let forms = ref({
  first_name: "",
  last_name: "",
  phone: "",
});
const openModal = (item) => {
  if (item) forms.value = { ...item };
  dialog.value = true;
};
const openDeleteModal = (id) => {
  unique_id.value = id;
  dialog2.value = true;
};
watch(dialog, (value) => {
  if (!value) {
    forms.value = {};
  }
});
const schema = computed(() => {
  return {
    first_name: "required|min:3|max:15",
    last_name: "required|min:3|max:15",
    phone: "required|min:3|:max:15",
  };
});
const btn_title = computed(() => {
  if (loading.value) {
    return "Loading";
  } else {
    if (forms.value.phone) return "Edit student";
    return " Create student";
  }
});
const send = async (values) => {
  let a = values.phone.split("");
  let b = a.filter((item) => !isNaN(+item));
  let c = "+" + b.join("");
  if (!forms.value._id) {
    loading.value = true;
    await store.createStudent({...values, phone: c});
    loading.value = false;
  } else {
    loading.value = true;
    let payload = {
      first_name: values.first_name,
      last_name: values.last_name,
      phone: values.phone,
    };
    await store.updateStudent(payload, forms.value._id);
    loading.value = false;
  }
};
const deleteStudent = async () => {
  await store.deleteStudent(unique_id.value);
};
defineExpose({ openModal, openDeleteModal });
</script>

<style lang="scss" scoped></style>
