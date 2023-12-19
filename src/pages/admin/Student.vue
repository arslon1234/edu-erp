<template>
  <div class="flex flex-col gap-3 items-start p-3">
    <studentModal ref="modal_value" />
    <div class="flex gap-[40px]">
      <VButton
        type="submit"
        btn_type="create"
        :isLoading="loading"
        @click="openModal"
        >Create student</VButton
      >
      <div class="w-[500px]">
        <input
          type="text"
          v-model="search"
          placeHolder="Search"
          @change="handleChange($event)"
          class="w-full px-[15px] py-[12px] text-[21px] outline-none border-[1px] border-global1 rounded-md"
        />
      </div>
    </div>
    <app-table :headers="headers" :body="store?.students">
      <template #body_action="{ item }">
        <VActions :item="item" :modal_value="modal_value" />
      </template>
    </app-table>
    <app-pagination
      :params="params"
      :changeParams="getStudent"
    ></app-pagination>
  </div>
</template>

<script setup>
import { useStudentStore } from "../../stores/admin/student";
const store = useStudentStore();
import studentModal from "./Modals/studentModal.vue";
import { onMounted, ref, watch } from "vue";
import VButton from "../../components/form/VButton.vue";
import AppTable from "../../components/ui/app-table.vue";
import VInput from "../../components/form/VInput.vue";
import AppPagination from '../../components/ui/app-pagination.vue'
import VActions from "../../components/form/VActions.vue";
const modal_value = ref("");
const loading = ref(false);
const search = ref("");
const params = ref({
  page: 1,
  limit: 10,
  last_page: null,
})
const openModal = () => {
  modal_value.value.openModal();
};
const getStudent =()=>{
  store.getStudents(params.value);
}
const handleChange = async (e) => {
  // console.log(e.target.value)
  // search.value = e.target.value
  if (e.target.value == "") {
    window.location.reload();
  }
  await store.getStudentSearch(search.value);
};
watch(search, (value) => {
  if (value === "") {
    window.location.reload()
  }
  console.log(value);
});
const headers = ref([
  { title: "First name", value: "first_name" },
  { title: "Last name", value: "last_name" },
  { title: "Phone number", value: "phone" },
  { title: "Action", value: "action" },
]);
onMounted(() => {
  store.getStudents(params.value);
});
</script>

<style lang="scss" scoped></style>
