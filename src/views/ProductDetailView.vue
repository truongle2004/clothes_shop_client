<script setup>
import ListProductsView from '@/views/ListProductsView.vue'
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import priceFormatter from '@/utils/formatPrice'
import { getProductId, saveProductId } from '@/utils/localStorageHelper'
import { useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
import ListProduct from '@/components/ListProduct.vue'

const widthListCard = '400px'
const store = useStore()
const route = useRoute()

const productId = ref(getProductId())
const productDetail = computed(() => store.getters['product/selectedProduct'])
const listCover = computed(() => productDetail.value?.images || [])
const selectedImage = ref(listCover.value[0]?.url || '')
const quantity = ref(1)

watch(
  listCover,
  (newList) => {
    if (newList.length > 0) {
      selectedImage.value = newList[0].url
    }
  },
  { immediate: true }
)

onBeforeMount(() => {
  store.dispatch('product/fetchProductById', route.params.id)
})

watch(
  () => route.params.id,
  (newId) => {
    if (newId) {
      productId.value = route.params.id
      saveProductId(newId)
    }
  }
)

const handleIncrement = () => {
  quantity.value++
}

const handleDecrement = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const handleSelectImage = (index) => {
  selectedImage.value = listCover.value[index]?.url || ''
}

const formattedPrice = computed(() => {
  const price = productDetail.value?.price || 0
  return priceFormatter.format(price)
})
</script>

<template>
  <div class="container">
    <div class="side-left">
      <div class="left-gallery">
        <img
          v-for="(image, index) in listCover"
          :key="image.id"
          class="img-thumbnail"
          :src="image.url"
          :alt="image.alt"
          @click="handleSelectImage(index)"
        />
      </div>
      <div class="swiper-images">
        <img class="img-fluid" :src="selectedImage" />
      </div>
    </div>
    <div class="side-right">
      <h3 class="header-title">{{ productDetail?.name }}</h3>
      <div class="d-flex">
        <div class="price">{{ formattedPrice }}</div>
        <div class="currency">{{ productDetail?.currency }}</div>
      </div>
      <div v-if="productDetail?.sizes" class="sizes">
        <button
          v-for="(size, index) in productDetail.sizes"
          :key="index"
          class="btn-size btn btn-outline-primary"
        >
          {{ size.name }}
        </button>
      </div>
      <div class="quantity d-flex gap-3 align-items-center">
        <button type="button" class="btn btn-outline-secondary btn-sm" @click="handleIncrement">
          +
        </button>
        <span class="quantity-value">{{ quantity }}</span>
        <button type="button" class="btn btn-outline-secondary btn-sm" @click="handleDecrement">
          -
        </button>
      </div>
      <div class="d-flex">
        <button type="button" class="btn btn-success w-100">Add to Bag</button>
        <button class="btn btn-outline-secondary w-100">Buy now</button>
      </div>
      <ul v-if="productDetail?.features">
        <li v-for="feature in productDetail.features" :key="feature.id">
          {{ feature.description }}
        </li>
      </ul>
    </div>
  </div>
  <div class="recommendations">
    <h4>YOU MIGHT ALSO LIKE</h4>
    <ListProduct :card-width="widthListCard" />
  </div>
</template>

<style scoped lang="scss">
.container {
  display: flex;
  gap: 4rem;
  flex-direction: row;
}

.side-left {
  display: flex;
  gap: 1rem;

  .left-gallery {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    .img-thumbnail {
      width: 100px;
      cursor: pointer;
    }
  }

  .swiper-images {
    .img-fluid {
      width: 516px;
    }
  }
}

.side-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .header-title {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .price {
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
    margin-right: 0.5rem;
  }

  .sizes {
    display: flex;
    gap: 0.5rem;

    .btn-size {
      padding: 0.25rem 0.75rem;
    }
  }

  .list-describe-product-detail {
    margin-top: 1rem;
  }
}

.recommendations {
  margin-top: 2rem;
  margin-left: 5rem;
  font-weight: bold;
  h4 {
    margin: 0;
  }
}
</style>
