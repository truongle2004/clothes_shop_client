import { CART_URL, PRODUCT_URL } from '@/constant'
import axiosInstance from '@/utils/axiosInstance'

const getAllProductApi = async () => {
  return await axiosInstance.get(PRODUCT_URL)
}

const getProductById = async (id) => {
  return await axiosInstance.get(`${PRODUCT_URL}/${id}`)
}

const addProductToCart = async (productId, quantity, size, price, userId) => {
  return await axiosInstance.post(`${CART_URL}/${userId}`, {
    productId,
    quantity,
    size,
    price
  })
}

export const productApis = {
  getAllProductApi,
  getProductById,
  addProductToCart
}
