import { toast } from 'vue3-toastify'

export const toastifySuccess = (message) => {
  toast.success(message, {
    autoClose: 3000,
    position: toast.POSITION.BOTTOM_RIGHT
  })
}

export const toastifyError = (message) => {
  toast.error(message, {
    autoClose: 3000,
    position: toast.POSITION.BOTTOM_RIGHT
  })
}

export const toastifyWarning = (message) => {
  toast.warning(message, {
    autoClose: 3000,
    position: toast.POSITION.BOTTOM_RIGHT
  })
}
