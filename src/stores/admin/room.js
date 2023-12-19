import { ref, computed } from "vue";
import { defineStore } from "pinia";
import adminRoom from "../../api/admin/adminRoom";
export const useRoomStore = defineStore({
  id: "room",
  state: () => ({
    rooms: [],
  }),
  actions: {
   async getAdminRooms(params){
        try{
           let res =  await adminRoom.getAdminRooms(params)
           this.rooms = res.rooms
        }catch(err){
            console.log(err)
        }
    },
   async createAdminRoom(payload){
        try{
           await adminRoom.createAdminRoom(payload)
        }catch(err){
            console.log(err)
        }
    },
   async updateAdminRoom(payload,id){
        try{
           await adminRoom.updateAdminRoom(payload,id)
        }catch(err){
            console.log(err)
        }
    },
   async deleteAdminRoom(id){
        try{
           await adminRoom.deleteAdminRoom(id)
        }catch(err){
            console.log(err)
        }
    }
  },
});
