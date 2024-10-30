<script setup>
import { useRouter } from 'vue-router'
import { computed } from 'vue'

const router = useRouter()

const handleClick = () => {
  router.push({
    name: 'product_detail'
  })
}

const cardWidth = computed(() => {
  return router.currentRoute.value.name === 'product_detail' ? '200px' : '318px'
})
</script>

<template>
  <div class="product-container" @click="handleClick" :style="{ maxWidth: cardWidth }">
    <img
      src="https://images.asos-media.com/products/topshop-oversized-drop-shoulder-tee-in-white/205435563-1-white?$n_640w$&wid=513&fit=constrain"
      alt="Tab Belted Twill Car Coat"
      class="product-image"
    />
    <div class="info">
      <div class="title">
        <p>Tab Belted Twill Car Coat</p>
      </div>
      <div class="price">
        <strong>
          <p>£100.00</p>
        </strong>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-container {
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 20px;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1 1 calc(25% - 40px);
  // max-width: 318px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow:
      rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
}

.product-image {
  width: 100%;
  height: auto;
}

.info {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  margin-top: 10px;
}

.title p,
.price p {
  margin-bottom: 0;
  padding: 2px 15px;
}
</style>
