<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'
import priceFormatter from '@/utils/formatPrice'

const router = useRouter()

const props = defineProps({
  product: Object
})

// Define a constant for the number format with thousands separator

// Format the price using the constant
const formattedPrice = computed(() => {
  const price = props.product?.price || 0
  return priceFormatter.format(price)
})

// const handleClick = () => {
//   router.push({
//     name: 'product_detail'
//   })
// }
//
const cardWidth = computed(() => {
  return router.currentRoute.value.name === 'product_detail' ? '200px' : '318px'
})

// Directly use computed property to handle the image source, falling back if necessary
const imageSrc = computed(
  () =>
    props.product?.image.url ||
    'https://product.hstatic.net/1000197303/product/pro_hoa_02_1_24d1ab2b185a451ca67be9ac96b7af27.jpg'
)
</script>

<template>
  <div
    class="card p-3 m-2 d-flex flex-column justify-content-between shadow-sm border-0"
    :style="{ maxWidth: cardWidth }"
  >
    <!-- Render the image based on computed property for image source -->
    <img :src="imageSrc" class="card-img-top" alt="Product Image" />
    <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title">{{ product?.name }}</h5>
      <div class="d-flex align-items-center">
        <div class="price">
          <strong>
            <p class="mb-0">{{ formattedPrice }}</p>
          </strong>
        </div>
        <div class="currency">
          <p class="mb-0">{{ product?.currency }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-img-top {
  object-fit: cover;
  border-radius: 0.25rem;
}

.card-body {
  padding: 0.75rem;
}

.price p {
  font-weight: bold;
}
</style>
