import axiosClient from "../apiClient";

const adminCourse = {
  getAdminCourses(params={}) {
    const url = `/courses/all/q?page=${params.page}&limit=${params.limit}`;
    return axiosClient.get(url);
  },
  createAdminCourse(payload) {
    const url = "courses/create-course";
    return axiosClient.post(url, payload);
  },
  updateAdminCourse(payload, id) {
    const url = `courses/update/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteAdminCourse(id){
    const url = `courses/delete/${id}`
    return axiosClient.delete(url)
  }
};
export default adminCourse;
