import { jwtDecode } from 'jwt-decode'

export const tokenDecoded = (token) => jwtDecode(token)
