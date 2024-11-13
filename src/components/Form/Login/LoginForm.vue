<script setup>
import { userApi } from '@/apis/userApi'
import router from '@/router'
import { useMutation } from '@tanstack/vue-query'
import { reactive } from 'vue'
import { ref } from 'vue'
import { toastifySuccess } from '@/utils/toastify'
import { useAuth } from '@/hooks/useAuth'
import { tokenDecoded } from '@/utils/tokenDecoded'

const errorMessage = ref(null)

const form = reactive({
  email: '',
  password: ''
})

const { isPending, mutate } = useMutation({
  mutationFn: userApi.loginApi
})

const { setUserInfo } = useAuth()

const handleOnSuccess = (data) => {
  const { message, accessToken } = data

  if (accessToken) {
    const userId = tokenDecoded(accessToken)?.id
    localStorage.setItem('userId', userId)
  }

  setUserInfo(tokenDecoded(accessToken))

  toastifySuccess(message)

  router.push({
    path: '/products'
  })
}

const handleOnError = (error) => {
  if (error.response && error.response.data && error.response.data.message) {
    errorMessage.value = error.response.data.message
  } else if (error.message) {
    errorMessage.value = error.message
  } else {
    errorMessage.value = 'An unknown error occurred.'
  }
}

const handleLogin = () => {
  if (validateForm()) {
    mutate(form, {
      onSuccess: handleOnSuccess,
      onError: handleOnError
    })
  }
}

const validateForm = () => {
  if (!form.email || !form.password) return false
  return true
}
</script>

<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Login</h1>
    <form @submit.prevent="handleLogin" class="w-50 mx-auto">
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input
          v-model="form.email"
          type="email"
          class="form-control"
          id="email"
          placeholder="Enter your email"
          required
        />
      </div>

      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input
          v-model="form.password"
          type="password"
          class="form-control"
          id="password"
          placeholder="Enter your password"
          required
        />
      </div>

      <button class="btn btn-primary w-100" type="submit" :disabled="isPending">
        <span v-if="isPending">Logging in...</span>
        <span v-else>Login</span>
      </button>

      <div v-if="errorMessage" class="alert alert-danger mt-3">
        {{ errorMessage }}
      </div>
    </form>

    <div class="text-center mt-3">
      <p>Don't have an account? <a href="/register">Register</a></p>
    </div>
  </div>
</template>

<style>
.container {
  margin-top: 50px;
}

.w-50 {
  width: 50%;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
</style>
