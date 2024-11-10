<script setup></script>

<template>
  <div class="container mt-4">
    <div class="list-group">
      <router-link :to="{ name: 'order' }" class="list-group-item list-group-item-action">
        My Order
      </router-link>
      <a href="#" class="list-group-item list-group-item-action"> Need help? </a>
      <a href="#" class="list-group-item list-group-item-action"> Gift cards & vouchers </a>
      <router-link :to="{ name: 'my_details' }" class="list-group-item list-group-item-action">
        My details
      </router-link>
      <a href="#" class="list-group-item list-group-item-action"> Address book </a>
      <a href="#" class="list-group-item list-group-item-action"> Payment method </a>
      <router-link :to="{ name: 'login' }" class="list-group-item list-group-item-action">
        Sign out
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.list-group-item {
  transition:
    padding 0.3s ease,
    background-color 0.3s ease;
  width: 300px;
}

.list-group-item:hover {
  text-decoration: underline;
  padding: 20px 10px;
  background-color: #e9ecef;
}
</style>
