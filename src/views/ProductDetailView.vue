<script setup>
import { productApis } from '@/apis/productApi'
import ListProduct from '@/components/ListProduct.vue'
import priceFormatter from '@/utils/formatPrice'
import { getProductId } from '@/utils/localStorageHelper'
import { toastifyError, toastifySuccess } from '@/utils/toastify'
import { tokenDecoded } from '@/utils/tokenDecoded'
import { useMutation } from '@tanstack/vue-query'
import { computed, onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

const widthListCard = '400px'
const store = useStore()
const router = useRouter()

const productDetail = computed(() => store.getters['product/selectedProduct'])
const listCover = computed(() => productDetail.value?.images || [])

const selectedImage = ref(listCover.value[0]?.url || '')

const selectedQuantity = ref(1)

const selectedSize = ref(null)

const errorMessage = ref(null)

const productId = ref(getProductId())

const { mutate, isPending } = useMutation({
  mutationFn: productApis.addProductToCart
})

const handleOnError = (error) => {
  if (error.response && error.response.data && error.response.data.message) {
    errorMessage.value = error.response.data.message
  } else if (error.message) {
    errorMessage.value = error.message
  } else {
    errorMessage.value = 'An unknown error occurred.'
  }
}

const handleSuccess = (data) => {
  const { message } = data
  toastifySuccess(message)
}

const fetchProduct = () => {
  if (productId.value) {
    store.dispatch('product/fetchProductById', productId.value)
  } else {
    router.push({ name: 'home' })
  }
}

watch(
  listCover,
  (newList) => {
    if (newList.length > 0) {
      selectedImage.value = newList[0].url
    }
  },
  { immediate: true }
)

const handleIncrement = () => {
  selectedQuantity.value++
}

const handleDecrement = () => {
  if (selectedQuantity.value > 1) {
    selectedQuantity.value--
  }
}

const handleSelectImage = (index) => {
  selectedImage.value = listCover.value[index]?.url || ''
}

const handleBuyNow = () => {}

const handleAddToBag = () => {
  if (selectedSize.value === null) {
    toastifyError('Please select size')
  }
  if (productId.value && selectedQuantity.value && selectedSize.value) {
    // TODO: storing in memory
    const token = localStorage.getItem('accessToken')
    if (token) {
      const userInfo = tokenDecoded(token)
      const cartData = {
        productId: productId.value,
        quantity: selectedQuantity.value,
        price: productDetail.value?.price,
        size: selectedSize.value,
        userId: userInfo?.id
      }

      console.log('cardData', cartData)

      mutate(cartData, {
        onSuccess: handleSuccess,
        onError: handleOnError
      })
    } else {
      toastifyError('You need to login first')
      router.push({ name: 'login' })
    }
  } else {
    console.warn('Missing required data for adding product to cart')
  }
}

const handleSelectSize = (size) => {
  selectedSize.value = size
}

const formattedPrice = computed(() => {
  const price = productDetail.value?.price || 0
  return priceFormatter.format(price)
})

onMounted(() => {
  if (!productDetail.value) {
    fetchProduct()
  }
})
</script>

<template>
  <div class="container d-flex gap-4 flex-row">
    <div class="side-left d-flex gap-3">
      <div class="left-gallery d-flex flex-column gap-1">
        <img
          v-for="(image, index) in listCover"
          :key="image.id"
          class="img-thumbnail cursor-pointer"
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
          :class="{ 'btn-selected': selectedSize === size.id }"
          @click="handleSelectSize(size.id)"
        >
          {{ size.name }}
        </button>
      </div>
      <div class="quantity d-flex gap-3 align-items-center">
        <button type="button" class="btn btn-outline-secondary btn-sm" @click="handleIncrement">
          +
        </button>
        <span class="quantity-value">{{ selectedQuantity }}</span>
        <button type="button" class="btn btn-outline-secondary btn-sm" @click="handleDecrement">
          -
        </button>
      </div>
      <div class="d-flex">
        <button type="button" class="btn btn-success w-100" @click="handleAddToBag">
          <span v-if="isPending">Adding...</span>
          <span v-else>Add to bag</span>
        </button>
        <button class="btn btn-outline-secondary w-100" @click="handleBuyNow">Buy now</button>
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
.img-thumbnail {
  width: 100px;
}

.img-fluid {
  width: 516px;
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

.btn-selected {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>
