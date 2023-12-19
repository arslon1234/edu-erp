import axiosClient from "../apiClient";

const authApi = {
    login(payload){
        const url = "/auth/login"
        return axiosClient.post(url,payload)
    },
    getUser(){
        const url = "user/about"
        return axiosClient.get(url,payload)
    }
}
export default authApi