import { ref, computed } from "vue";
import { defineStore } from "pinia";
import adminCourse from "../../api/admin/adminCourse";
export const useCourseStore = defineStore({
  id: "course",
  state: () => ({
    courses: [],
  }),
  actions: {
   async getAdminCourses(params){
        try{
           let res =  await adminCourse.getAdminCourses(params)
           this.courses = res.courses
        }catch(err){
            console.log(err)
        }
    },
   async createAdminCourse(payload){
        try{
           await adminCourse.createAdminCourse(payload)
        //    this.courses = res.courses
        }catch(err){
            console.log(err)
        }
    },
   async updateAdminCourse(payload,id){
        try{
           await adminCourse.updateAdminCourse(payload,id)
        }catch(err){
            console.log(err)
        }
    },
   async deleteAdminCourse(id){
        try{
           await adminCourse.deleteAdminCourse(id)
        }catch(err){
            console.log(err)
        }
    }
  },
});
