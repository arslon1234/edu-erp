import { ref, computed } from "vue";
import { defineStore } from "pinia";
import directorRoles from "../../api/director/directorRoles";
export const useRoleStore = defineStore({
  id: "roles",
  state: () => ({
    roles: [],
  }),
  actions: {
   async getRoles(){
        try{
           let res =  await directorRoles.getRoles()
           this.roles = res.roles
        }catch(err){
            console.log(err)
        }
    },
   async createRole(payload){
        try{
           await directorRoles.createRole(payload)
        }catch(err){
            console.log(err)
        }
    },
//    async updateAdminRoom(payload,id){
//         try{
//            await adminRoom.updateAdminRoom(payload,id)
//         }catch(err){
//             console.log(err)
//         }
//     },
//    async deleteAdminRoom(id){
//         try{
//            await adminRoom.deleteAdminRoom(id)
//         }catch(err){
//             console.log(err)
//         }
//     }
  },
});
