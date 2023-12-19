<template>
  <AppModal v-model="dialog">
    <div class="my-[20px]">
      <!-- <h1 class="text-center text-[30px] text-global1" v-if="!forms._id">Create staff</h1>
      <h1 class="text-center text-[30px] text-global1" v-else>Edit staff</h1> -->
    </div>
    <vee-form
      :validation-schema="schema"
      @submit="send"
      :initial-values="forms"
    >
      <VSelect
        label="Select a role"
        :options="store2?.roles"
        name="role"
        @change="handleChange($event)"
      >
      </VSelect>
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
        placeHolder="Phone number"
      ></VInput>
      <VSelect label="Select a course" :options="store?.courses" name="course">
      </VSelect>
      <div class="flex justify-center mt-[30px]">
        <VButton type="submit" btn_type="create" :isLoading="loading">{{
          btn_title
        }}</VButton>
      </div>
    </vee-form>
  </AppModal>
</template>

<script setup>
import { computed, ref } from "vue";
import AppModal from "../../../components/ui/app-modal.vue";
import VSelect from "../../../components/form/VSelect.vue";
import VInput from "../../../components/form/VInput.vue";
import VButton from "../../../components/form/VButton.vue";
import { useCourseStore } from "../../../stores/admin/course";
import { useRoleStore } from "../../../stores/director/role";
const store = useCourseStore();
const store2 = useRoleStore();

const dialog = ref(false);
const loading = ref(false);
const is_active = ref(false);
let forms = ref({
  first_name: "",
  last_name: "",
  phone: "",
});
const schema = computed(() => {
  return {
    first_name: "required|min:3|max:15",
    last_name: "required|min:3|max:15",
    role: "required|min:3|:max:15",
    phone: "required|min:3|:max:15",
    course: "min:3|:max:30",
  };
});
const handleChange = (e) => {
  let val = JSON.parse(e.target.value);
  if (val.name == "TEACHER") {
    is_active.value = true;
  } else {
    is_active.value = false;
  }
};
const btn_title = computed(() => {
  if (loading.value) {
    return "Loading";
  } else {
    if (forms.value.phone) return "Edit staff";
    return " Create staff";
  }
});
const openModal = async () => {
  dialog.value = true;
  await store.getAdminCourses();
  await store2.getRoles();
  console.log(store2?.roles, "roles");
  console.log(store?.courses, "courses");
};

const send = (values) => {
  let payload = {
    ...values,
    role: JSON.parse(values.role)._id,
    course: values.course ? JSON.parse(values.course)._id : "",
  };
  console.log(payload, payload);
};
defineExpose({ openModal });
</script>

<style lang="scss" scoped></style>
