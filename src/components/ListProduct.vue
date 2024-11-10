<script setup>
import CardProduct from '@/components/CardProduct.vue'
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { saveProductId } from '@/utils/localStorageHelper'
import { formatString } from '@/utils/formatSlug'

const router = useRouter()
const store = useStore()

const listProducts = computed(() => store.getters['product/products'])
onMounted(() => {
  if (!listProducts.value.length) {
    store.dispatch('product/fetchProducts')
  }
})

const handleSelectedProduct = (id, name) => {
  saveProductId(id)
  store.dispatch('product/fetchProductById', id)
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
