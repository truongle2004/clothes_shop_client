<script setup>
import CardProduct from '@/components/CardProduct.vue'
import NavBar from '@/components/NavCategory.vue'
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

const routeIgnore = ['/product']

const route = useRoute()

const store = useStore()

const listProducts = computed(() => store.getters['product/products'])

const checkRouteIgnore = () => {
  return routeIgnore.includes(route.path)
}

onMounted(() => {
  if (!listProducts.value.length) {
    store.dispatch('product/fetchProducts')
  }
})

const handleSelectedProduct = (id) => {
  store.dispatch('product/fetchProductById', id)
}
</script>

<template>
  <div v-show="!checkRouteIgnore()">
    <NavBar />
  </div>
  <div class="list-products">
    <CardProduct
      v-for="product in listProducts"
      :key="product.id"
      :product="product"
      @click="handleSelectedProduct(product.id)"
    />
  </div>
</template>

<style scoped>
.dropdown-toggle {
  width: 200px;
}

.list-products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
