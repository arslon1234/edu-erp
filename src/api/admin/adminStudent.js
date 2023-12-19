import axiosClient from "../apiClient";

const adminStudent = {
  getStudents(params={}) {
    const url = `admin/get-students/q?page=${params.page}&limit=${params.limit}`;
    return axiosClient.get(url);
  },
  getStudentSearch(search) {
    const url = `students/search`;
    return axiosClient.post(url,{phone: search});
  },
  createStudent(payload) {
    const url = "admin/add-student";
    return axiosClient.post(url, payload);
  },
  updateStudent(payload, id) {
    const url = `admin/update-student/${id}`;
    return axiosClient.post(url, payload);
  },
  deleteStudent(id){
    const url = `admin/delete-student/${id}`
    return axiosClient.delete(url)
  }
};
export default adminStudent;
