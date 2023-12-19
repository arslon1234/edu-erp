<template>
    <div class="flex flex-col gap-3 items-start p-3">
        <courseModal ref="modal_value"/>
        <VButton btn_type="create" @click="openModal">Create course</VButton>
        <app-table :headers="headers" :body="store?.courses">
            <template #body_action="{item}">
                <VActions :item="item" :modal_value="modal_value"/>
            </template>
        </app-table>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useCourseStore } from '../../stores/admin/course';
import AppTable from '../../components/ui/app-table.vue';
import VButton from '../../components/form/VButton.vue';
import VActions from "../../components/form/VActions.vue";
const store = useCourseStore()
import courseModal from './Modals/courseModal.vue'
const params = ref({
    page: 1,
    limit: 10,
    last_page: null
})
const modal_value = ref('')
const headers = ref([
    {title: 'Course name', value: 'name'},
    {title: 'Course cost', value: 'price'},
    {title: 'Course period', value: 'period'},
    {title: 'Action', value: 'action'},
])
const openModal =()=>{
    modal_value.value.openModal()
}
onMounted(()=>{
    store.getAdminCourses(params.value)
})
</script>

<style lang="scss" scoped>

</style>