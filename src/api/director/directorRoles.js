import axiosClient from "../apiClient";

const directorRoles = {
    getRoles(){
        const url = `roles/all`
        return axiosClient.get(url)
    },
    createRole(payload){
        const url = `roles/create-role`
        return axiosClient.post(url,payload)
    }
}
export default directorRoles