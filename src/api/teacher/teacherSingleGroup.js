import axiosClient from "../apiClient";

const teacherSingleGroups = {
    getTeacherSingleLesson(group_id,date){
        const url = `groups/attendance/${group_id}`
        return axiosClient.post(url,{
            date: date
        })
    },
    updateTeacherSingleLesson(payload){
        const url = `groups/attendance/update/lesson`
        return axiosClient.post(url,{
            data: payload
        })
    },
    updateTeacherLessonAttendance(id,title){
        const url = `lessons/lesson/attendance/${id}`
        return axiosClient.put(url,{
            title: title
        })
    },
    getAllStudentsAttendance(id,params){
        const url = `groups/attendance/${id}/all/q?page=${params.page}&limit=${params.limit}`
        return axiosClient.get(url)
    },
    getAllGroupLessons(id,params={}){
        const url = `lessons/group/${id}/q?page=${params.page}&limit=${params.limit}`
        return axiosClient.get(url)
    },
    getSingleLessonVideo(id){
        const url = `lesson-videos/${id}`
        return axiosClient.get(url)
    },
}
export default teacherSingleGroups