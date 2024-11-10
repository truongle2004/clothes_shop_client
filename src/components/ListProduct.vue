<script setup>
import CardProduct from '@/components/CardProduct.vue'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { saveProductId } from '@/utils/localStorageHelper'
import { formatString } from '@/utils/formatSlug'

// Route paths that should hide NavBar

// Vue Router and Store instances
const router = useRouter()
const store = useStore()

// Computed property for the product list from the Vuex store
const listProducts = computed(() => store.getters['product/products'])

// Checks if the current route should hide NavBar
// const shouldHideNavBar = computed(() => HIDDEN_NAV_ROUTES.includes(route.path))

// Fetch products on mount if the product list is empty
onMounted(() => {
  if (!listProducts.value.length) {
    store.dispatch('product/fetchProducts')
  }
})

// Handles product selection, saving the product ID and navigating to detail view
const handleSelectedProduct = (id, name) => {
  console.log(id, name)
  saveProductId(id)
  router.push({ name: 'product_detail', params: { id, slug: formatString(name) } })
}
</script>

<template>
  <div class="list-products">
    <CardProduct
      v-for="product in listProducts"
      :key="product.id"
      :product="product"
      @click="handleSelectedProduct(product.id, product.name)"
    />
  </div>
</template>

<style scoped>
.list-products {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.dropdown-toggle {
  width: 200px;
}
</style>
