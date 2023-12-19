<template>
    <div class="flex flex-col gap-3 items-start p-3">
      <rolesModal ref="modal_value"/>
      <VButton btn_type="create" @click="openModal">create</VButton>
      <app-table :headers="headers" :body="store?.roles">
        <template #body_action="{ item }">
          <VActions :item="item" :modal_value="modal_value" />
        </template>
      </app-table>
    </div>
  </template>
  
  <script setup>
  import AppTable from "../../components/ui/app-table.vue";
  import { onMounted, ref } from "vue";
  import { useRoleStore } from "../../stores/director/role";
  import VActions from "../../components/form/VActions.vue";
  import VButton from "../../components/form/VButton.vue";
  import rolesModal from "./Modal/rolesModal.vue";
  const store = useRoleStore();
  const modal_value = ref('')
  const openModal =()=>{
      modal_value.value.openModal()
  }
  const headers = ref([
    { title: "Name", value: "name" },
    { title: "Description", value: "description" },
  ]);
  onMounted(() => {
    store.getRoles();
  });
  </script>
  
  <style lang="scss" scoped></style>
  