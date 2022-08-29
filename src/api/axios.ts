import axios, { AxiosRequestConfig } from "axios";

let axiosConfig: AxiosRequestConfig = {
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "20913bf3d60adce9ba32221e726bce83",
    language: "ko-KR"
  },
};
export default axios.create(axiosConfig);
