import { ref } from 'vue'

export const useAuth = () => {
  const userInfo = ref({})

  const setUserInfo = (newUserInfo) => {
    userInfo.value = newUserInfo
  }

  const getUserInfo = () => userInfo

  return {
    setUserInfo,
    getUserInfo
  }
}
