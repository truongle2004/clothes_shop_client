import { CART_URL, PRODUCT_URL } from '@/constant'
import axiosInstance from '@/utils/axiosInstance'

const getAllProductApi = async () => {
  return await axiosInstance.get(PRODUCT_URL)
}

const getProductById = async (id) => {
  return await axiosInstance.get(`${PRODUCT_URL}/${id}`)
}

const addProductToCart = async (props) => {
  return await axiosInstance.post(`${CART_URL}/${props.userId}`, {
    productId: props.productId,
    quantity: props.quantity,
    price: props.price,
    size: props.size
  })
}

const getAllUserCart = async (id) => {
  return await axiosInstance.get(`${CART_URL}/${id}`)
}

const removeCartItem = async (id) => {
  return await axiosInstance.delete(`${CART_URL}/${id}`)
}

export const productApis = {
  getAllProductApi,
  getProductById,
  addProductToCart,
  getAllUserCart,
  removeCartItem
}
