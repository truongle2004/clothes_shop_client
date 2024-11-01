<script setup>
import { ref } from 'vue'
import ListProductsView from '@/views/ListProductsView.vue'

const widthListCard = '400px'

const listCover = [
  ' https://images.asos-media.com/products/topshop-oversized-drop-shoulder-tee-in-white/205435563-1-white?$n_320w$&wid=317&fit=constrain ',
  'https://images.asos-media.com/products/topshop-oversized-drop-shoulder-tee-in-white/205435563-2?$n_320w$&wid=317&fit=constrain',
  'https://images.asos-media.com/products/topshop-oversized-drop-shoulder-tee-in-white/205435563-3?$n_320w$&wid=317&fit=constrain',
  'https://images.asos-media.com/products/topshop-oversized-drop-shoulder-tee-in-white/205435563-4?$n_320w$&wid=317&fit=constrain'
]

const showProductDetailInfo = ref(false)
const showBrandDetailInfo = ref(false)
const showAboutMeInfo = ref(false)

const selectedImage = ref(listCover[0])

const handleClickProductDetailBtn = () => {
  showProductDetailInfo.value = !showProductDetailInfo.value
}

const handleClickBrandDetailBtn = () => {
  showBrandDetailInfo.value = !showBrandDetailInfo.value
}

const handleClickShowAboutMeBtn = () => {
  showAboutMeInfo.value = !showAboutMeInfo.value
}

const handleSelectImage = (index) => {
  selectedImage.value = listCover[index]
}
</script>

<template>
  <div class="container d-flex gap-4">
    <div class="side-left d-flex gap-3">
      <div class="left-gallery d-flex flex-column gap-2">
        <img
          class="img-thumbnail"
          alt="Gallery Image"
          v-for="(image, index) in listCover"
          :key="index"
          :src="image"
          @click="handleSelectImage(index)"
        />
      </div>
      <div class="swiper-images">
        <img class="img-fluid" :src="selectedImage" alt="Main Gallery Image" />
      </div>
    </div>
    <div class="side-right d-flex flex-column gap-2">
      <h3 class="header-title">Topshop Heidi Knitted Headscarf in Cream</h3>
      <div class="price">£100.00</div>
      <div class="color">
        <strong>Size:</strong>
        <p>One size</p>
      </div>
      <div>
        <button type="button" class="btn btn-success w-100">Add to Bag</button>
      </div>
      <div>
        <button type="button" class="btn btn-light w-100" @click="handleClickProductDetailBtn">
          Product Details
        </button>

        <div class="list-describe-product-detail" v-show="showProductDetailInfo">
          <div class="product-describer">
            <div class="d-flex flex-row gap-1">
              <p class="name-product">Accessories</p>
              <p>by</p>
              <p class="brand-product">Topshop</p>
            </div>
          </div>
          <ul>
            <li>This is Topshop</li>
            <li>Plain Design</li>
            <li>Tie fastening</li>
          </ul>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-light w-100" @click="handleClickBrandDetailBtn">
          Brand
        </button>
        <div class="list-describe-product-detail" v-show="showBrandDetailInfo">
          <div class="brand-description">
            <p>
              <strong> TopShop </strong>
              is entering a new era. Retaining its fashion authority and the very best of its
              heritage, while celebrating iconic styles such as the Jamie and Joni jean, and
              embracing the new. With that unique London spirit remaining at the core of the
              collections, join us on a journey of exploration and discovery. Shop the entire range
              only at ASOS in petite, maternity, tall and curve edits and expect dresses, tops,
              tailoring and shoes.
            </p>
          </div>
        </div>
      </div>
      <div>
        <button type="button" class="btn btn-light w-100" @click="handleClickShowAboutMeBtn">
          About Me
        </button>
        <div class="about-me-description" v-show="showAboutMeInfo">
          <p>Jersey: soft and stretchy</p>
          <p>Main: 100% cotton</p>
        </div>
      </div>
    </div>
  </div>
  <div>
    <strong>
      <h4 style="margin-top: 2rem; margin-left: 5rem; font-weight: bold">YOU MIGHT ALSO LIKE</h4>
    </strong>
  </div>
  <ListProductsView :card-width="widthListCard" />
</template>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.product-describer {
  .name-product,
  .brand-product {
    text-decoration: underline !important;
  }
}

.brand-description {
  font-size: 0.875rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
  width: 500px;
  strong {
    text-decoration: underline;
  }
}

.side-left {
  .img-thumbnail {
    width: 100px;
    height: auto;
    margin-bottom: 0.5rem;
  }

  .swiper-images .img-fluid {
    width: 516px;
    height: auto;
  }
}

.side-right {
  .header-title {
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .price {
    font-size: 1.25rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 0.5rem;
  }
}
</style>
