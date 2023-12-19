import { ref, computed } from "vue";
import { defineStore } from "pinia";
import authApi from "../api/auth/authApi";
import authProfile from "../api/auth/authProfile";
import router from "@/router/index";
export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    user: null,
    roles: [],
    image: ""
  }),
  actions: {
    async authLogin(payload) {
      // +998936996008
      try {
        let res = await authApi.login(payload);
        if (res?.tokens?.access_token) {
          localStorage.setItem("role", res?.user?.role);
          localStorage.setItem("token", res?.tokens?.access_token);
          if (res?.user?.role == "admin") {
            await router.push({ name: "students" });
          }else if(res?.user?.role == "director"){
            await router.push({ name: "staffs" });
          }else if(res?.user?.role == "teacher"){
            await router.push({ name: "teacher" });
          }
        }
      } catch (err) {
        console.log(err);
      }
    },
    async getProfile() {
      try {
        let res = await authProfile.getProfile();
        this.user = res;
      } catch (err) {
        console.log(err);
      }
    },
    async updateImage(payload) {
      try {
        let res = await authProfile.updateImage(payload);
        this.image = res.image
      } catch (err) {
        console.log(err);
      }
    },
    async updateProfile(payload) {
      try {
        let res = await authProfile.updateProfile(payload);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
