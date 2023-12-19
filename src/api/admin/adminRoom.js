import axiosClient from "../apiClient";

const adminRoom = {
  getAdminRooms(params) {
    const url = `rooms/all/q?page=${params.page}&limit=${params.limit}`;
    return axiosClient.get(url);
  },
  createAdminRoom(payload) {
    const url = "rooms/create-room";
    return axiosClient.post(url, payload);
  },
  updateAdminRoom(payload, id) {
    const url = `rooms/update/${id}`;
    return axiosClient.put(url, payload);
  },
  deleteAdminRoom(id){
    const url = `rooms/delete/${id}`
    return axiosClient.delete(url)
  }
};
export default adminRoom;
