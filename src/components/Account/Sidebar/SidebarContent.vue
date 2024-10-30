<script setup>
import { userApi } from '@/apis/UserApi'
import { useMutation } from '@tanstack/vue-query'
import { reactive, ref } from 'vue'

// TODO: create useMutation hook
// TODO: set user info after returning from API

const errorMessage = ref(null)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  dateOfBirth: '',
  phone: ''
})

const validateForm = () => {
  if (!form.firstName && !form.lastName && !form.email && !form.dateOfBirth && form.phone) {
    return false
  }
  return true
}

const { isPending, mutate } = useMutation({
  mutationFn: userApi.addInfoApi
})
</script>

<template>
  <div class="container">
    <strong>
      <h3>MY DETAIL</h3>
    </strong>
    <div>
      <form @submit.prevent="validateForm">
        <div class="user-name">
          <label class="form-label">User name</label>
          <input
            v-model="form.lastName"
            type="text"
            class="form-control last-name"
            id="last-name"
            placeholder="Enter your last name"
            required
          />
        </div>

        <div class="email">
          <label class="form-label">Email Address</label>
          <input
            v-model="form.email"
            type="email"
            class="form-control email"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="phone">
          <label class="form-label"> Phone Number</label>
          <input
            v-model="form.number"
            type="text"
            class="form-control email"
            id="phone"
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div class="date-of-birth">
          <label class="form-label">Date of Birth</label>
          <input
            v-model="form.dateOfBirth"
            type="date"
            class="form-control date-of-birth"
            id="date-of-birth"
            required
          />
        </div>

        <div>
          <p>MOST INTERESTED IN*</p>
        </div>
        <div class="mb-3 text-start d-flex justify-content-evenly">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="clothes" id="women-clothes" />
            <label class="form-check-label" for="women-clothes">Womenswear</label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="clothes" id="men-clothes" />
            <label class="form-check-label" for="men-clothes">Menswear</label>
          </div>
        </div>

        <button class="btn btn-primary" type="submit" style="width: 100%">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 500px;
  padding: 20px;
  background-color: #f0f8ff;
  height: auto;
  /* margin: 0 auto; */
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-bottom: 20px;
}

.form-check {
  margin-right: 10px;
}

.form-control {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
