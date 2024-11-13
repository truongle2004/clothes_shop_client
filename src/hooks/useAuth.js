import { toastifyError } from '@/utils/toastify'
import { reactive } from 'vue'

export const useAuth = () => {
  const userInfo = reactive({})

  const setUserInfo = (newUserInfo) => {
    Object.assign(userInfo, newUserInfo)
  }

  const getUserInfo = () => {
    if (!Object.keys(userInfo).length) {
      toastifyError('You are not logged in')
      return null
    }
    return userInfo.value
  }

  const clearUserInfo = () => {
    Object.keys(userInfo).forEach((key) => delete userInfo[key])
  }

  const isAuthenticated = () => !!localStorage.getItem('access_token')

  return {
    setUserInfo,
    getUserInfo,
    clearUserInfo,
    isAuthenticated
  }
}
