<!-- eslint-disable no-unused-vars -->
<script setup>
const handleLogin = () => {}
</script>

<template>
  <div class="container text-center mt-4">
    <h1 class="mb-4">We love new faces :)</h1>
    <form class="w-50 mx-auto" @submit.prevent="handleLogin">
      <div class="mb-3 text-start">
        <label for="email" class="form-label">Email*</label>
        <p class="text-muted">lesytruong247@gmail.com</p>
      </div>

      <div class="mb-3 text-start">
        <label for="user-name" class="form-label">User name</label>
        <input type="text" class="form-control" id="first-name" required />
      </div>

      <div class="mb-3 text-start">
        <label for="dob" class="form-label">Date of Birth*</label>
        <input type="date" class="form-control" id="dob" required />
        <p class="text-muted mt-1">You must be at least 16 years old</p>
      </div>

      <label class="d-flex flex-start mb-3">MOST INTERESTED IN*</label>

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

      <button class="btn btn-primary w-100" type="submit">JOIN ASOS</button>
    </form>
  </div>
</template>
