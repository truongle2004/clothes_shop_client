<script setup lang="ts">
import { productApis } from '@/apis/productApi'
import CartItem from '@/components/CartItem.vue'
import { useMutation } from '@tanstack/vue-query'
import { reactive, onMounted } from 'vue'

const cart = reactive({
  cartItems: []
})

const { mutate: fetchCartItems } = useMutation({
  mutationFn: productApis.getAllUserCart,
  onSuccess: (data) => {
    cart.cartItems = data
  },
  onError: (error) => {
    console.error('Failed to fetch cart items:', error)
  }
})

onMounted(() => {
  const userId = localStorage.getItem('userId')
  if (userId) fetchCartItems(userId)
})
</script>

<template>
  <div class="container my-5">
    <div class="text-center mb-4">
      <h2>My Bag</h2>
    </div>
    <div class="row">
      <div class="col-md-8">
        <div class="bg-light p-3 rounded mb-4">
          <CartItem v-for="cartItem in cart.cartItems" :key="cartItem.id" :item="cartItem" />
        </div>
      </div>
      <div class="col-md-4">
        <div class="bg-light p-3 rounded">
          <h3 class="text-center mb-3">Total</h3>
          <div class="d-flex justify-content-between mb-3">
            <p>Subtotal:</p>
            <p>£12.75</p>
          </div>
          <button class="btn btn-primary w-100">Buy</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
