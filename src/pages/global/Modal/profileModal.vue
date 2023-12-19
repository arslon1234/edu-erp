<template>
  <AppModal v-model="dialog">
    <h1>Profile</h1>
    <input
      type="file"
      placeholder="select your file"
      @change="handleChange($event)"
    />
    <img
      :src="image"
      class="w-[100px] h-[100px] rounded-full"
      alt=""
    />
    <vee-form
      :validation-schema="schema"
      @submit="editProfile"
      :initial-values="forms"
    >
      <div>
        <VInput
          type="text"
          label="First Name"
          name="first_name"
          placeHolder="First Name"
        ></VInput>
      </div>
      <div>
        <VInput
          type="text"
          label="Last Name"
          name="last_name"
          placeHolder="Last Name"
        ></VInput>
      </div>
      <div>
        <VInput
          type="text"
          label="Phone number"
          name="phone"
          mask="(+998)-##-###-##-##"
          placeHolder="(+998)-93-102-06-36"
        ></VInput>
      </div>
      <VButton btn_type="edit" type="submit">edit profile</VButton>
    </vee-form>
  </AppModal>
</template>

<script setup>
import AppModal from "../../../components/ui/app-modal.vue";
import { computed,ref } from "vue";
import { useAuthStore } from "../../../stores/auth";
import VInput from "../../../components/form/VInput.vue";
import VButton from "../../../components/form/VButton.vue";
const store = useAuthStore();
const dialog = ref(false);
const image = ref("");
const forms = ref({
    first_name: "",
    last_name: "",
    phone: ""
})
const openModal = () => {
  dialog.value = true;
    forms.value = store?.user
};
const schema = computed(() => {
  return {
    first_name: "required|min:3|max:15",
    last_name: "required|min:3|max:15",
    phone: "required|min:3|:max:15",
  };
});
const handleChange = async (e) => {
  const form = new FormData();
  form.append("image", e.target.files[0]);
  await store.updateImage(form);
  image.value = `${import.meta.env.VITE_APP_BASE_URL}/${store?.image}`;
};
const editProfile = async (values) => {
  console.log(values);
  let a = values.phone.split("");
  let b = a.filter((item) => !isNaN(+item));
  let c = "+" + b.join("");
  let payload = {
    image: store?.image,
    ...values,
    phone: c
  };
  await store.updateProfile(payload);
};
defineExpose({ openModal });
</script>

<style lang="scss" scoped></style>
