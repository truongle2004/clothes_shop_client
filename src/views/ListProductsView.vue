<script setup>
import CardProduct from '@/components/CardProduct.vue'
import NavBar from '@/components/NavCategory.vue'
import { useRoute } from 'vue-router'

const routeIgnore = ['/product']

const route = useRoute()

const checkRouteIgnore = () => {
  return routeIgnore.includes(route.path)
}
</script>
<template>
  <div v-show="!checkRouteIgnore()">
    <NavBar />
  </div>
  <div class="list-products">
    <CardProduct v-for="i in 12" :key="i" />
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
