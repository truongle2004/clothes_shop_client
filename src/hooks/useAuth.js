import { ref } from 'vue'

export const useAuth = () => {
  const userInfo = ref({})

  const setUserInfo = (newUserInfo) => {
    userInfo.value = newUserInfo
  }

  const getUserInfo = () => userInfo

  const clearUserInfo = () => {
    userInfo.value = {}
  }

  const isAuthenticated = () => !!userInfo.value

  return {
    setUserInfo,
    getUserInfo,
    clearUserInfo,
    isAuthenticated
  }
}
