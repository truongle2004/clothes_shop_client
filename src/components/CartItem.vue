<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import priceFormatter from '@/utils/formatPrice'
import { useMutation } from '@tanstack/vue-query'
import { productApis } from '@/apis/productApi'
import { toastifyError } from '@/utils/toastify'

// TODO: remove hard code size name
// TODO: remove cart item

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})

const { mutate: RemoveItem } = useMutation({
  mutationFn: productApis.removeCartItem,
  onSuccess: () => {
    store.dispatch('cart/RemoveCartItemToList', props.item)
  },
  onError: (data) => {
    const { message } = data
    toastifyError(message)
  }
})

const size = ref(props.item?.size?.name)

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
    store.dispatch('cart/AddCartItemSelected', {
      ...props.item,
      quantity: quantity.value
    })
  } else {
    store.dispatch('cart/RemoveCartItemUnselect', {
      ...props.item,
      quantity: quantity.value
    })
  }
}

const handleChooseSize = (e) => {
  size.value = e.target.innerText
}

// TODO: when we remove item, we should also remove from cart in store which is selected before
const handleRemoveItem = () => {
  RemoveItem(props.item?.id)
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
            {{ size }}
          </button>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" @click="handleChooseSize">XS</a></li>
            <li><a class="dropdown-item" @click="handleChooseSize">S</a></li>
            <li><a class="dropdown-item" @click="handleChooseSize">M</a></li>
            <li><a class="dropdown-item" @click="handleChooseSize">L</a></li>
          </ul>
        </div>
        <div class="quantity-controls d-flex align-items-center gap-2">
          <button @click="decreaseQuantity" class="btn btn-outline-secondary btn-sm">-</button>
          <span>{{ quantity }}</span>
          <button @click="increaseQuantity" class="btn btn-outline-secondary btn-sm">+</button>
        </div>
      </div>
    </div>
    <div>
      <button class="btn btn-danger" @click="handleRemoveItem">Remove</button>
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
