<script setup>
import { reactive } from 'vue'

const form = reactive({
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@example.com',
  dateOfBirth: '1990-01-01'
})

const validateForm = () => {
  console.log('Form submitted', form)
}
</script>

<template>
  <div>
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
            required
          />
        </div>

        <div class="email">
          <label class="form-label">Email Address</label>
          <input v-model="form.email" type="email" class="form-control email" id="email" required />
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
            <input class="form-check-input" type="radio" name="women-clothes" id="women-clothes" />
            <label class="form-check-label" for="women-clothes">Womenswear </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="men-clothes" id="men-clothes" />
            <label class="form-check-label" for="flexRadioDefault2">Menswear</label>
          </div>
        </div>

        <button class="btn btn-primary" type="submit" style="width: 100%">Submit</button>
      </form>
    </div>
  </div>
</template>

<style scoped>
div {
  width: 500px;
  height: 100%;
  background-color: #f0f8ff;
}
</style>
