import { ref, computed } from "vue";
import { defineStore } from "pinia";
import adminStudent from "../../api/admin/adminStudent";
export const useStudentStore = defineStore({
  id: "student",
  state: () => ({
    students: [],
  }),
  actions: {
    async getStudents(params) {
      try {
        let res = await adminStudent.getStudents(params);
        this.students = res.students
        params.last_page = Math.ceil(res.count / params.limit)
      } catch (err) {
        console.log(err);
      }
    },
    async getStudentSearch(search) {
      try {
        let res = await adminStudent.getStudentSearch(search);
        this.students = res.student
        // params.last_page = Math.ceil(res.count / params.limit)
      } catch (err) {
        console.log(err);
      }
    },
    async createStudent(payload){
        try{
          await adminStudent.createStudent(payload) 
        }catch(err){
            console.log(err)
        }
    },
    async updateStudent(payload,id){
        try{
          await adminStudent.updateStudent(payload,id) 
        }catch(err){
            console.log(err)
        }
    },
    async deleteStudent(id){
        try{
          await adminStudent.deleteStudent(id) 
        }catch(err){
            console.log(err)
        }
    }
  },
});
