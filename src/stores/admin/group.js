import { ref, computed } from "vue";
import { defineStore } from "pinia";
import adminGroup from "../../api/admin/adminGroup";
export const useGroupStore = defineStore({
  id: "group",
  state: () => ({
    groups: [],
    rooms:[],
    teachers:[],
    group_id: "",
    single_group_lessons:[],
    single_group_students:[]
  }),
  actions: {
   async getAdminGroups(params){
        try{
           let res =  await adminGroup.getAdminGroups(params)
           params.last_page = Math.ceil(res.count / params.limit)
           this.groups = res.groups
        }catch(err){
            console.log(err)
        }
    },
   async getGroupTeacher(id){
        try{
           let res =  await adminGroup.getGroupTeacher(id)
           this.teachers = res.teachers
        }catch(err){
            console.log(err)
        }
    },
   async getLessonsSingleGroup(id){
        try{
           let res =  await adminGroup.getLessonsSingleGroup(id)
           this.single_group_lessons = res.lessons
        }catch(err){
            console.log(err)
        }
    },
   async getStudentsSingleGroup(id){
        try{
           let res =  await adminGroup.getStudentsSingleGroup(id)
           this.single_group_students = res
        }catch(err){
            console.log(err)
        }
    },
   async updateLessonSingleGroup(lesson_id,payload){
        try{
           let res =  await adminGroup.updateLessonSingleGroup(lesson_id, payload)
        //    this.single_group_lessons = res.lessons
        }catch(err){
            console.log(err)
        }
    },
   async updateStudentSingleGroup(lesson_id,payload){
        try{
           let res =  await adminGroup.updateStudentSingleGroup(lesson_id, payload)
       
        }catch(err){
            console.log(err)
        }
    },
   async addGroupTeacher(payload){
        try{
           await adminGroup.addGroupTeacher(payload)
        }catch(err){
            console.log(err)
        }
    },
   async createAdminGroup(payload){
        try{
         let res = await adminGroup.createAdminGroup(payload)
         this.group_id = res.group._id
         console.log(res.group._id, 'res')
        
        }catch(err){
            console.log(err)
        }
    },
   async updateAdminGroup(payload,id){
        try{
           await adminRoom.updateAdminGroup(payload,id)
        }catch(err){
            console.log(err)
        }
    },
   async deleteAdminGroup(id){
        try{
           await adminRoom.deleteAdminGroup(id)
        }catch(err){
            console.log(err)
        }
    },
    async availableAdminRooms(payload){
        try{
           let res = await adminGroup.availableAdminRooms(payload)
           this.rooms = res
        console.log(res)
         }catch(err){
             console.log(err)
         }
    },
    async createAdminStudent(payload){
        try{
           let res = await adminGroup.createAdminStudent(payload)
        //    this.rooms = res
        console.log(res)
         }catch(err){
             console.log(err)
         }
    }
  },
});
