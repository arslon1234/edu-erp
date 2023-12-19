<template>
  <AppModal v-model="dialog">
    <h1 class="text-center">Check Students</h1>
    <vee-form @submit="save" :validation-schema="schema">
      <VInput type="text" name="title" placeHolder="Mavzuni kiriting"></VInput>
    <div
      v-for="(item, index) in store?.lessons"
      :key="index"
      class="flex items-center justify-between my-3"
    >
      <span
        >{{ item?.student?.first_name + " " + item?.student?.last_name }}
      </span>
      <div>
        <button
        type="button"
          class="border-[1px] bg-[green] cursor-pointer"
          @click="handleChange(index)"
        >
          {{ item.participated ? "participated" : "absent" }}
        </button>
      </div>
    </div>
    <VButton btn_type="create" type="submit">SAVE</VButton>
</vee-form>

  </AppModal>
</template>

<script setup>
import { computed, ref } from "vue";
import AppModal from "../../../components/ui/app-modal.vue";
const dialog = ref(false);
import { useTeacherSingleGroupStore } from "../../../stores/teacher/single_group";
const store = useTeacherSingleGroupStore();
import VButton from "../../../components/form/VButton.vue";
import VInput from "../../../components/form/VInput.vue";
const openModal = () => {
  dialog.value = true;
  console.log(store.lessons, "s");
};
const handleChange = (index) => {
  store.lessons[index].participated = !store.lessons[index].participated;
};
const schema = computed(() => {
  return {
    title: "required|min:3|max:15",
  };
});
const save = async (value) => {
  let id = store.lessons[0].lesson;
  await store.updateTeacherSingleLesson(store.lessons);
  store.updateTeacherLessonAttendance(id,value.title);
};
defineExpose({ openModal });
</script>

<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 30px;
  margin: 0 10px;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #ccc;
  transition: all 0.3s linear;
  border-radius: 34px;
}
.switch input {
  display: none;
}
.slider::before {
  position: absolute;
  content: "";
  height: 25px;
  width: 25px;
  left: 5px;
  top: 2.5px;
  background-color: white;
  border-radius: 50%;
  transition: all 0.3s linear;
}
input:checked + .slider {
  background-color: blue;
}
input:checked + .slider::before {
  transform: translateX(25px);
  transition: all 0.3s linear;
}
</style>
