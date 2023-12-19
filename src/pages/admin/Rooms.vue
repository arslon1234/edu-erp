<template>
    <div class="flex flex-col gap-3 items-start p-3">
        <roomModal ref="modal_value"/>
        <VButton btn_type="create" @click="openModal">Create room</VButton>
        <app-table :headers="headers" :body="store?.rooms">
            <template #body_action="{item}">
                <VActions :item="item" :modal_value="modal_value"/>
            </template>
        </app-table>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoomStore } from '../../stores/admin/room';
import AppTable from '../../components/ui/app-table.vue';
import roomModal from './Modals/roomModal.vue';
import VActions from "../../components/form/VActions.vue";
import VButton from '../../components/form/VButton.vue';
const store = useRoomStore()
const params = ref({
    page: 1,
    limit: 10,
    last_page: null
})
const modal_value = ref()
const headers = ref([
    {title: 'Room name', value: "name"},
    {title: 'Room size', value: "size"},
    {title: 'Action', value: "action"},
])
const openModal =()=>{
    modal_value.value.openModal()
}
onMounted(()=>{
    store.getAdminRooms(params.value)
})
</script>

<style scoped>

</style>