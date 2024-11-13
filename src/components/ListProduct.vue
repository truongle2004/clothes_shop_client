<script setup>
import CardProduct from '@/components/CardProduct.vue'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { saveProductId } from '@/utils/localStorageHelper'
import { formatString } from '@/utils/formatSlug'
import { useMutation } from '@tanstack/vue-query'
import { productApis } from '@/apis/productApi'
import { useStore } from 'vuex'

const router = useRouter()

const store = useStore()


const listProduct = reactive({
  data: []
})

const {
  mutate: fetchProducts,
  isLoading,
  error
} = useMutation({
  mutationFn: productApis.getAllProductApi,
  onSuccess: (data) => {
    listProduct.data = data
  }
})

fetchProducts()

const handleSelectedProduct = (id, name) => {
  saveProductId(id)

  store.dispatch('product/fetchProductById', id)
  router.push({ name: 'product_detail', params: { id, slug: formatString(name) } })
}
</script>

<template>
  <div class="list-products d-flex justify-content-center flex-wrap">
    <p v-if="isLoading">Loading...</p>
    <p v-if="error">Failed to load products</p>

    <CardProduct
      v-for="product in listProduct.data"
      :key="product.id"
      :product="product"
      @click="handleSelectedProduct(product.id, product.name)"
    />
  </div>
</template>
