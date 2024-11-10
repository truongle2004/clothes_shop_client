import { PRODUCT_URL } from '@/constant'
import axiosInstance from '@/utils/axiosInstance'

const getAllProductApi = async () => {
  return await axiosInstance.get(PRODUCT_URL)
}

const getProductById = async (id) => {
  return await axiosInstance.get(`${PRODUCT_URL}/${id}`)
}

export const productApis = {
  getAllProductApi,
  getProductById
}
