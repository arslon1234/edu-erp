<template>
  <div class="flex flex-col gap-3 items-start p-3">
    <staffsModal ref="modal_value"/>
    <VButton btn_type="create" @click="openModal">create</VButton>
    <app-table :headers="headers" :body="store?.staffs">
      <template #body_action="{ item }">
        <VActions :item="item" :modal_value="modal_value" />
      </template>
    </app-table>
  </div>
</template>

<script setup>
import AppTable from "../../components/ui/app-table.vue";
import { onMounted, ref } from "vue";
import { useStaffStore } from "../../stores/director/staffs";
import VActions from "../../components/form/VActions.vue";
import VButton from "../../components/form/VButton.vue";
import staffsModal from "./Modal/staffsModal.vue";
const store = useStaffStore();
const modal_value = ref('')
const params = ref({
  page: 1,
  limit: 10,
  last_page: null,
});
const openModal =()=>{
    modal_value.value.openModal()
}
const headers = ref([
  { title: "First name", value: "first_name" },
  { title: "Last name", value: "last_name" },
  { title: "Phone number", value: "phone" },
  { title: "Role", value: "role" },
  { title: "Start date", value: "start_date"},
  { title: "Action", value: "action" },
]);
onMounted(() => {
  store.getStaffs(params.value);
});
</script>

<style lang="scss" scoped></style>
