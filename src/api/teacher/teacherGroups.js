import axiosClient from "../apiClient";

const teacherGroups = {
    getTeacherGroups(id){
        const url = `teachers/get-groups/${id}`
        return axiosClient.get(url)
    },
}
export default teacherGroups