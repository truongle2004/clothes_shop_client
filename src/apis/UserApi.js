import { ADD_INFO_URL, LOGIN_URL, REGISTER_URL } from '@/constant'
import axiosInstance from '@/utils/axiosInstance'

const loginApi = ({ email, password }) => {
  return axiosInstance.post(LOGIN_URL, { email, password })
}

const registerApi = ({ username, password, email }) => {
  return axiosInstance.post(REGISTER_URL, { username, password, email })
}

const addInfoApi = ({ username, email, address, phone, id }) => {
  return axiosInstance.post(`${ADD_INFO_URL}/${id}`, { username, email, address, phone })
}

export const userApi = {
  loginApi,
  registerApi,
  addInfoApi
}
