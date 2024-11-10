<script setup lang="ts">
import CartItem from '@/components/CartItem.vue'
</script>

<template>
  <div class="container my-5">
    <div class="text-center mb-4">
      <h2>MY BAG</h2>
    </div>
    <div class="row">
      <div class="col-md-8">
        <div class="bg-light p-3 rounded">
          <CartItem />
        </div>
      </div>

      <div class="col-md-4">
        <div class="bg-light p-3 rounded">
          <h3 class="text-center mb-3">TOTAL</h3>
          <div class="d-flex justify-content-between mb-3">
            <p>Subtotal:</p>
            <p>£12.75</p>
          </div>
          <button class="btn btn-primary w-100">BUY</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
