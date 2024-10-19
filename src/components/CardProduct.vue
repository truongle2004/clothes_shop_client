<script setup>
const handleClick = () => {
  console.log('is called')
}
</script>

<template>
  <div class="product-container" @click="handleClick">
    <img
      src="https://images.asos-media.com/products/topshop-tab-belted-twill-car-coat-in-grey/206033977-1-grey?$n_480w$&wid=476&fit=constrain"
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

<style scoped>
.product-container {
  display: flex;
  flex-direction: column;
  margin: 20px;
  max-width: 318px;
  border-radius: 20px;
  transition: box-shadow 0.3s ease-in-out;
}

.product-container:hover {
  box-shadow:
    rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
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
