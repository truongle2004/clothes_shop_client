<script setup>
import { userApi } from '@/apis/UserApi'
import { useMutation } from '@tanstack/vue-query'
import { reactive } from 'vue'
import { useAuth } from '@/hooks/useAuth'
import router from '@/router'
import { ref } from 'vue'

const errorMessage = ref(null)

const form = reactive({
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
})

const { isPending, mutate } = useMutation({
  mutationFn: userApi.registerApi
})

const { setUserInfo } = useAuth()

const handleOnSuccess = (data) => {
  const { user } = data
  setUserInfo(user)
  router.push({
    path: '/list_products'
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

const handleRegister = () => {
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
    <h1 class="text-center mb-4">Register</h1>
    <form @submit.prevent="handleRegister" class="w-50 mx-auto">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input
          v-model="form.username"
          type="text"
          class="form-control"
          id="username"
          placeholder="Enter your username"
          required
        />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
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

      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input
          v-model="form.confirmPassword"
          type="password"
          class="form-control"
          id="confirmPassword"
          placeholder="Confirm your password"
          required
        />
      </div>

      <button type="submit" class="btn btn-primary w-100">
        <span v-if="isPending">Submitting...</span>
        <span v-else>Register</span>
      </button>
      <div>
        <p v-if="errorMessage" class="alert alert-danger mt-3">{{ errorMessage }}</p>
      </div>
    </form>

    <div class="text-center mt-3">
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  </div>
</template>

<style scoped>
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
