<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import priceFormatter from '@/utils/formatPrice'

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const store = useStore()
const quantity = ref(props.item.quantity)

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 0) quantity.value--
}

const formattedPrice = computed(() => priceFormatter.format(props.item.price))

const handleCheckBox = (e) => {
  const isSelected = e.target.checked
  if (isSelected) {
    store.dispatch('cart/AddCartItem', props.item)
  } else {
    store.dispatch('cart/RemoveCartItem', props.item.id)
  }
}
</script>

<template>
  <div class="product d-flex gap-3">
    <div class="product-image">
      <img :src="props.item.image?.url" alt="Product image" class="img-fluid" />
    </div>
    <div class="product-info">
      <input class="form-check-input" type="checkbox" @change="handleCheckBox" />
      <div class="product-details">
        <span class="price text-danger fw-bold">{{ formattedPrice }}</span>
        <span class="currency">{{ props.item.currency }}</span>
        <p class="description text-muted">{{ props.item.name }}</p>
      </div>
      <div class="product-options d-flex align-items-center gap-3 mt-2">
        <div class="dropdown">
          <button
            class="btn btn-outline-secondary dropdown-toggle btn-sm"
            type="button"
            data-bs-toggle="dropdown"
            :aria-label="`Select size for ${props.item.name}`"
          >
            {{ props.item.size?.name }}
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item">XS</a></li>
            <li><a class="dropdown-item">S</a></li>
            <li><a class="dropdown-item">M</a></li>
            <li><a class="dropdown-item">L</a></li>
          </ul>
        </div>
        <div class="quantity-controls d-flex align-items-center gap-2">
          <button @click="decreaseQuantity" class="btn btn-outline-secondary btn-sm">-</button>
          <span>{{ quantity }}</span>
          <button @click="increaseQuantity" class="btn btn-outline-secondary btn-sm">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-image img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 4px;
}

.product-info {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
}

.product-details {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
  flex-basis: 100%;
}

.product-options {
  flex-basis: 100%;
}

.quantity-controls {
  display: flex;
  align-items: center;
}
</style>
