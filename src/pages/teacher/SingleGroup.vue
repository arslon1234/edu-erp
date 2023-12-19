<template>
  <div class="p-[20px]">
    <VButton btn_type="create" @click="active = !active">change</VButton>
    <div v-if="active">
      <checkStudents ref="modal_value" />
      <div class="w-full flex items-center justify-between gap-5">
        <div class="w-full">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item title="All lessons">
              <div class="w-full flex gap-2 flex-wrap">
                <div v-for="(item, index) in store?.group_lessons" :key="index">
                  <el-popover
                    placement="top-start"
                    :title="
                      FormatDate(item.date) + '  ' + ` lesson:#${item?.number}`
                    "
                    :width="200"
                    trigger="hover"
                    transition="100 linear"
                    :content="item?.description"
                  >
                    <template #reference>
                      <div
                        class="w-[40px] h-[40px] border-[1px] px-[5px] border-global1 flex items-center justify-center rounded-md cursor-pointer"
                        :class="
                          !item.pass
                            ? 'text-global1'
                            : 'bg-[#ccc] text-[#fff] border-none'
                        "
                      >
                        {{ FormatDateAttendance(item.date) }}
                      </div>
                    </template>
                  </el-popover>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
        <VButton btn_type="create" @click="openModal">
          <svg-icon type="mdi" :path="mdiMenu"></svg-icon>
        </VButton>
      </div>
      <div class="demo-collapse">
        <el-collapse>
          <el-collapse-item
            :title="item.student.first_name + ' ' + item.student.last_name"
            :name="item._id"
            v-for="(item, index) in store?.teacher_students"
            :key="index"
          >
            <div class="w-full flex gap-2 flex-wrap">
              <div v-for="(item2, index2) in item.attendance" :key="index2">
                <el-popover
                  placement="top-start"
                  :title="FormatDate(item2.date)"
                  :width="200"
                  trigger="hover"
                  transition="100 linear"
                  :content="item2?.comment"
                >
                  <template #reference>
                    <div
                      class="w-[40px] h-[40px] border-[1px] px-[5px] border-global1 flex items-center justify-center rounded-md cursor-pointer"
                      :class="
                        item2.participated
                          ? 'text-global1'
                          : 'bg-[crimson] text-[#fff] border-none'
                      "
                    >
                      {{ FormatDateAttendance(item2.date) }}
                    </div>
                  </template>
                </el-popover>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
    <div v-else>
      <h1>video yuklash</h1>
      <select v-model="form.lesson">
        <option value="" selected hidden>Select lesson</option>
        <option
          :value="item._id"
          v-for="(item, index) in store?.pass_lessons"
          :key="index"
        >
          {{ item.title }}
        </option>
      </select>
      <div>
        <el-upload class="upload-demo" drag multiple @change="handleChange">
          <el-icon class="el-icon--upload"><upload-filled /></el-icon>
          <div class="el-upload__text">
            Drop file here or <em>click to upload</em>
          </div>
          <template #tip>
            <div class="el-upload__tip">
             {{ form.video.name }}
            </div>
          </template>
        </el-upload>
      </div>
      <input type="file" @change="handleChange2($event)" />
      <input
        type="text"
        v-model="form.video_name"
        class="border border-[#000]"
      />
      <VButton btn_type="create" @click="save">dars qo'shish</VButton>
      <h1>{{ status }}</h1>
      <h1>{{ progress }}</h1>
    </div>
  </div>
</template>

<script setup>
import { useTeacherSingleGroupStore } from "../../stores/teacher/single_group";
import { computed, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import VButton from "../../components/form/VButton.vue";
import { FormatDateAttendance, FormatDate } from "../../hooks/FormatDate";
import checkStudents from "./Modals/checkStudents.vue";
import VSelect from "../../components/form/VSelect.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMenu } from "@mdi/js";
const route = useRoute();
const store = useTeacherSingleGroupStore();
const active = ref(false);
const modal_value = ref();
const form = ref({
  video: "",
  lesson: "",
  video_name: "",
});
const params = ref({
  page: 1,
  limit: 10,
  per_page: null,
});

const openModal = async () => {
  await store.getTeacherSingleLesson(route.params.id, "2023-10-28");
  modal_value.value.openModal();
  let date = FormatDate(new Date());
};
let progress = ref("");
const handleChange = (event) => {
  console.log(event);
  form.value.video = event.raw
};
const handleChange2 = (event) => {
  console.log(event.target.files[0]);
};
const loading = ref(null);
const status = computed(() => {
  if (loading.value === null) {
    return "";
  } else if (loading.value) {
    return "Yuklanmoqda";
  } else {
    return "Tayyor";
  }
});

const save = async () => {
  loading.value = true;
  let token = localStorage.getItem("token");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "http://34.125.211.64:3300/api/lesson-videos/upload", true);
  xhr.setRequestHeader("Authorization", `Bearer ${token}`);

  xhr.upload.onprogress = function (e) {
    if (e.lengthComputable) {
      var percentComplete = (e.loaded / e.total) * 100;
      progress.value = Math.round(percentComplete) + "% uploaded";
      if (Math.round(percentComplete) == 100) {
        loading.value = false;
      }
    }
  };
  xhr.onload = function () {
    if (xhr.status === 200) {
      alert("File uploaded successfully");
    } else {
      alert("File upload failed");
    }
  };
  let forms = new FormData();
  forms.append("video", form.value.video);
  forms.append("title", form.value.video_name);
  forms.append("lesson", form.value.lesson);
  xhr.send(forms);
};
onMounted(async () => {
  store.getAllStudentsAttendance(route.params.id, params.value);
  store.getAllGroupLessons(route.params.id);
  store.getSingleLessonVideo('653b8dddeee4afaa7d53146')
});
</script>

<style lang="scss" scoped>
.el-collapse-item {
  color: #12486b;
  padding: 10px;
  border: 1px solid #12486b;
  margin: 5px 0px;
}
.el-collapse-item {
  .title {
    color: green;
  }
}
</style>
