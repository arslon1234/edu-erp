<template>
  <div class="flex flex-col gap-3 items-start p-3">
    <groupModal ref="modal_value" />
    <VButton btn_type="create" @click="openModal">Create group</VButton>
    <app-table :headers="headers" :body="store?.groups">
      <template #body_days="{ item }">
        <div v-if="item.days" class="flex gap-2">
          <span>Mon</span>
          <span>Wen</span>
          <span>Fr</span>
        </div>
        <div v-else class="flex gap-2">
          <span>Tue</span>
          <span>Thu</span>
          <span>Sat</span>
        </div>
      </template>
      <template #body_start_date="{ item }">
        <span>{{ FormatDate(item?.start_date) }}</span>
      </template>
      <template #body_end_date="{ item }">
        <span>{{ FormatDate(item?.end_date) }}</span>
      </template>
      <template #body_start_time="{ item }">
        <span>{{ FormatTime(item?.start_time) }}</span>
      </template>
      <template #body_end_time="{ item }">
        <span>{{ FormatTime(item?.end_time) }}</span>
      </template>
      <template #body_course_id="{ item }">
        <span>{{ item?.course_id?.name }}</span>
      </template>
      <template #body_action="{ item }">
        <VActions
          :item="item"
          :modal_value="modal_value"
          path="/single_group"
        />
      </template>
    </app-table>
      <app-pagination :params="params" :changeParams="getGroups"></app-pagination>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useGroupStore } from "../../stores/admin/group";
import AppTable from "../../components/ui/app-table.vue";
import VButton from "../../components/form/VButton.vue";
import groupModal from "./Modals/groupModal.vue";
import { FormatDate, FormatTime } from "../../hooks/FormatDate";
import VActions from "../../components/form/VActions.vue";
import AppPagination from '../../components/ui/app-pagination.vue'

const store = useGroupStore();
const modal_value = ref();
const params = ref({
  page: 1,
  limit: 10,
  last_page: null,
});
const openModal = () => {
  modal_value.value.openModal();
};
const getGroups = ()=>{
    store.getAdminGroups(params.value)
}
const headers = ref([
  { title: "Group name", value: "name" },
  { title: "Course name", value: "course_id" },
  { title: "Start data", value: "start_date" },
  { title: "End data", value: "end_date" },
  { title: "Days", value: "days" },
  { title: "Start time", value: "start_time" },
  { title: "End time", value: "end_time" },
  { title: "Status", value: "status" },
  { title: "Action", value: "action" },
]);
onMounted( async() => {
  await store.getAdminGroups(params.value);
});
</script>

<style lang="scss" scoped></style>
