import axios from 'axios'

// Create an Axios instance
const axiosInstance = axios.create({
  timeout: 1000 * 60 * 5, // Set request timeout to 5 minutes (10 minutes = 1000 * 60 * 10)
  withCredentials: true // Automatically send cookies for cross-origin requests
})

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    const { accessToken } = response.data
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken)
    }
    if (accessToken) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
    }
    return response.data
  },
  (error) => {
    console.error('Response error:', error)
    return Promise.reject(error)
  }
)

export default axiosInstance
