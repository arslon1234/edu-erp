<template>
  <main>
   
    <!-- <vee-form :validation-schema="schema" @submit="save">
      <div>
        <VInput
          type="text"
          label="Username"
          name="username"
          placeHolderProps="Username"
        >
        </VInput>
      </div>
      <div>
        <VInput
          type="password"
          label="Password"
          name="password"
          placeHolderProps="Password"
        >
        </VInput>
        <button type="submit">save</button>
      </div>
    </vee-form>
    <div v-if="authstore.roles.length > 0">
      <select v-model="selected" >
        <option :value="item" v-for="(item,index) in authstore.roles" :key="index">{{ item }}</option>
      </select>
      <button @click="saveForm">save form</button>
    </div> -->
  </main>
</template>
<script setup>
import { computed, ref, watch } from "vue";
import { useAuthStore } from "../stores/auth";
const authstore = useAuthStore();
const phone = ref("")
const selected = ref("");
const schema = computed(() => {
  return {
    password: "required|min:3|max:30",
    username: "required|min:3|max:30",
  };
});
const handleChange =(e)=>{
  phone.value = e.target.value
  console.log(e.target.value)
}
const save = async () => {
  console.log(phone.value)
  // await authstore.authLogin(values);
};
const saveForm = async () => {
  let payload = {
    current_role: selected.value,
    ...authstore.user,
  };
  await authstore.authLogin(payload);
};
</script>

<style >
.form{
  width: 400px;
}
</style>
