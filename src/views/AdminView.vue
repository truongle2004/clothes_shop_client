<script setup>
import { productApis } from '@/apis/productApi'
import { useMutation } from '@tanstack/vue-query'
import { reactive } from 'vue'

const data = reactive({
  products: []
})

const { mutate: fetchAllProducts } = useMutation({
  mutationFn: productApis.getAllProductApi,
  onSuccess: (data) => {
    data.products = data
  },
  onError: (error) => {
    console.error(error)
  }
})

fetchAllProducts()
</script>
<template>
  <div class="container d-flex flex-row gap-5">
    <div class="product-list"></div>
    <div class="user-list">truong</div>
  </div>
</template>
