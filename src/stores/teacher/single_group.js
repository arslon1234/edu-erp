import { ref, computed } from "vue";
import { defineStore } from "pinia";
import teacherSingleGroup from "../../api/teacher/teacherSingleGroup";
export const useTeacherSingleGroupStore = defineStore({
  id: "teacher_single_group",
  state: () => ({
    teacher_students: [],
    lessons: [],
    group_lessons:[],
    pass_lessons:[]
  }),
  actions: {
   async getTeacherSingleLesson(group_id,date){
        try{
           let res =  await teacherSingleGroup.getTeacherSingleLesson(group_id,date)
           this.lessons = res
        }catch(err){
            console.log(err)
        }
    },
   async updateTeacherLessonAttendance(id,title){
        try{
           let res =  await teacherSingleGroup.updateTeacherLessonAttendance(id,title)
        }catch(err){
            console.log(err)
        }
    },
   async updateTeacherSingleLesson(payload){
        try{
           let res =  await teacherSingleGroup.updateTeacherSingleLesson(payload)
          //  this.lessons = res
          
        }catch(err){
            console.log(err)
        }
    },
   async getAllStudentsAttendance(id,params){
        try{
           let res =  await teacherSingleGroup.getAllStudentsAttendance(id,params)
           this.teacher_students = res
          console.log(res[0].attendance.length)

        }catch(err){
            console.log(err)
        }
    },
   async getAllGroupLessons(id){
        try{
           let res =  await teacherSingleGroup.getAllGroupLessons(id)
            this.group_lessons = res.lessons
            this.pass_lessons = res.lessons.filter((item)=> item.pass == true)
            console.log(this.pass_lessons, 'pass_lessons')
        }catch(err){
            console.log(err)
        }
    },
   async getSingleLessonVideo(id){
        try{
           let res =  await teacherSingleGroup.getSingleLessonVideo(id)
           console.log(res)
           
        }catch(err){
            console.log(err)
        }
    },
  },
});
