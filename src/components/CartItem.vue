<script setup>
import { ref } from 'vue'

const quantity = ref(0)

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 0) quantity.value--
}
</script>

<template>
  <div class="d-flex gap-3">
    <div class="product-image">
      <img
        src="https://images.asos-media.com/products/topshop-oversized-drop-shoulder-tee-in-white/205435563-1-white"
        class="img-fluid"
      />
    </div>
    <div class="product-info">
      <div class="price text-danger fw-bold">£12.75</div>
      <div class="description text-muted">Topshop oversized drop shoulder tee in white</div>
      <div class="d-flex align-items-center gap-3 mt-2">
        <span class="text-secondary">Color: WHITE</span>
        <div class="dropdown">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Size
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item">XS</a></li>
            <li><a class="dropdown-item">S</a></li>
            <li><a class="dropdown-item">M</a></li>
            <li><a class="dropdown-item">L</a></li>
          </ul>
        </div>
        <div class="d-flex align-items-center gap-2">
          <button @click="decreaseQuantity" class="btn btn-outline-secondary">-</button>
          <span>{{ quantity }}</span>
          <button @click="increaseQuantity" class="btn btn-outline-secondary">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-image img {
  width: 120px;
}
</style>
