import axiosClient from "../apiClient";

const adminGroup = {
  getAdminGroups(params) {
    const url = `groups/all/q?page=${params.page}&limit=${params.limit}`;
    return axiosClient.get(url);
  },
  createAdminGroup(payload) {
    const url = "groups/create-group";
    return axiosClient.post(url, payload);
  },
  updateAdminGroup(payload, id) {
    const url = `groups/update/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteAdminGroup(id){
    const url = `groups/delete/${id}`
    return axiosClient.delete(url)
  },
  availableAdminRooms(payload){
    const url = "groups/available-rooms";
    return axiosClient.post(url, payload);
  },
  createAdminStudent(payload){
    const url = "groups/add-student";
    return axiosClient.post(url, payload);
  },
  getGroupTeacher(id) {
    const url = `courses/all-teachers/${id}`;
    return axiosClient.get(url);
  },
  getLessonsSingleGroup(id) {
    const url = `lessons/group/${id}/q?`;
    return axiosClient.get(url);
  },
  getStudentsSingleGroup(id) {
    const url = `groups/attendance/${id}/all/q?`;
    return axiosClient.get(url);
  },
  updateLessonSingleGroup(lesson_id, payload) {
    const url = `lessons/lesson/comment/${lesson_id}`;
    return axiosClient.put(url, payload);
  },
  updateStudentSingleGroup(lesson_id, payload) {
    const url = `groups/attendance/update/lesson/${lesson_id}`;
    return axiosClient.put(url, payload);
  },
  addGroupTeacher(payload){
    const url = "groups/add-teacher";
    return axiosClient.post(url, payload);
  },
};
export default adminGroup;
